//DOM elements
const header = document.getElementsByTagName("header");
const title = document.getElementsByTagName("h1");
const imgLightning = document.getElementById("img-lightning");
const audLightning = document.getElementById("aud-lightning");
const image = document.getElementById("image");
const imgPortal = document.getElementById("img-portal");
const gridCCntr = document.getElementById("grid-container");
const valId = document.getElementById("val-id");
const valName = document.getElementById("val-name");
const valStatus = document.getElementById("val-status");
const valSpecies = document.getElementById("val-species");
const valGender = document.getElementById("val-gender");
const btnGenerate = document.getElementById("btn-generate");
const footer = document.getElementsByTagName("footer");

//Initialization of API
const apiCharacter = "https://rickandmortyapi.com/api/character/";
const init = {
  method: "GET",
  Titles: {
    Accept: "application/json",
    "Content-type": "aplication/json",
  },
};

//===== Promises =====
//const myPromise = new Promise((resolve, reject) => {});
//Promise.resolve("input").then(onfulfilled, onrejected);
//Promise.reject("input").then(onfulfilled).catch(onrejected);
//...
// async function () => {
//     let x;
//     try {x = await new Promise.resolve("input");}
//     catch (err) {x = await new Promise.reject("input"); console.log(err);}}
//====================

let count = 2; //async safeguard (Rick and Morty).

//get max number of characters
fetch(apiCharacter, init)
  .then((response) => response.json())
  .then((data) => (count = data.info.count));

// async function getCount(number) {
//     const response = await fetch(apiCharacter, init);
//     const data = await response.json();
//     number = await data.info.count;
//     console.log(`O valor de number é: ${number}`);
// }

function drawNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

async function main(params) {
  let response = null;

  //draw character number
  const characterNumber = drawNumber(count);

  //get json from API
  response = await fetch(`${apiCharacter}${characterNumber}`, init);
  const character = await response.json();

  //console.log(character);

  //get url from response
  //character.image

  //get image from API
  response = await fetch(character.image, init);
  const imageBlob = await response.blob();

  // create object from image
  const imageObjectURL = URL.createObjectURL(imageBlob);

  //(future) set animation
  //{...}

  //insert image in html
  image.src = imageObjectURL;
  //??? URL.revokeObjectURL(imageObjectURL); ???

  //insert info in grid layout
  valId.innerText = character.id;
  valName.innerText = character.name;
  valStatus.innerText = character.status;
  valSpecies.innerText = character.species;
  valGender.innerText = character.gender;
}

function resizeTitle() {
  const titleHeight = header[0].offsetHeight;

  const titleNewFontSize = titleHeight * 0.5;
  title[0].style.fontSize = titleNewFontSize + "px";

  const titleNewPadding = titleHeight * 0.25;
  title[0].style.padding = titleNewPadding + "px";
}

function resizeRows() {
  //=== Heigth of Grid ====
  //4% of padding (2% * (top and botton))
  //8% of gap (2% * (4 * spaces between rows))
  //100% - 12% = 88% = 0.88
  //=== Heigth of Rows ====
  //88% / 5 = 17.6% = 0.176
  //17.6 each row
  //05.50% border
  //24.50% padding
  //70.00% content
  //100% Total
  //------
  //02.75% border-top
  //12.25% padding-top
  //70.00% content
  //12.25% padding-bottom
  //02.75% border-bottom
  //------

  //Largest constant word for line break
  const gridHeight = valSpecies.parentElement.offsetHeight;
  const rowNewHeight = gridHeight * 0.176;
  const rowNewBorder = rowNewHeight * 0.0275;
  const rowNewPadding = rowNewHeight * 0.1225;
  const rowNewFontSize = rowNewHeight * 0.7;

  const numChildren = gridCCntr.childElementCount;
  for (let i = 0; i < numChildren; i++) {
    gridCCntr.children[i].style.borderWidth = rowNewBorder + "px";
    gridCCntr.children[i].style.padding = rowNewPadding + "px";
    gridCCntr.children[i].style.fontSize = rowNewFontSize + "px";
  }
}

function resizeButton() {
  const buttonHeight = btnGenerate.offsetHeight;

  const buttonNewFontSize = buttonHeight * 0.5;
  btnGenerate.style.fontSize = buttonNewFontSize + "px";

  const buttonNewPadding = buttonHeight * 0.25;
  btnGenerate.style.padding = buttonNewPadding + "px";
}

function resizeFooter() {
  const footerHeight = footer[0].offsetHeight;

  const footerNewFontSize = footerHeight * 0.8;
  footer[0].style.fontSize = footerNewFontSize + "px";

  const footerNewPadding = footerHeight * 0.1;
  footer[0].style.padding = footerNewPadding + "px";
}

function gifOverlayPassing() {
  imgLightning.style.transition = "left 1.25s linear";
  imgLightning.style.display = "inline";
  imgLightning.style.left =
    header[0].offsetWidth - imgLightning.offsetWidth + "px";
  imgLightning.ontransitionend = () => {
    imgLightning.style.display = "none";
    imgLightning.style.transition = "left 0s";
    imgLightning.style.left = "0px";
  };
}

window.addEventListener("load", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
  gifOverlayPassing();
});

window.addEventListener("resize", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
});

btnGenerate.addEventListener("click", main);

header[0].addEventListener("click", () => {
  gifOverlayPassing();
  audLightning.play();
});
