"use strict";

// ===== DOM elements =====
const html = document.getElementsByTagName("html")[0];
const mainTag = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
const title = document.getElementsByTagName("h1")[0];
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
const crsPortalGun = document.getElementById("cursor-portal-gun");
const btnGenerate = document.getElementById("btn-generate");
const footer = document.getElementsByTagName("footer")[0];

// Initialization of API
const apiCharacter = "https://rickandmortyapi.com/api/character/";
const init = {
  method: "GET",
  Titles: {
    Accept: "application/json",
    "Content-type": "aplication/json",
  },
};

// ===== Promises =====
// const myPromise = new Promise((resolve, reject) => {});
// Promise.resolve("input").then(onfulfilled, onrejected);
// Promise.reject("input").then(onfulfilled).catch(onrejected);
// ...
// async function () => {
//     let x;
//     try {x = await new Promise.resolve("input");}
//     catch (err) {x = await new Promise.reject("input"); console.log(err);}}
// ====================

let count = 2; // Async safeguard (Rick and Morty).

// Asynchronously get max number of characters
fetch(apiCharacter, init)
  .then((response) => response.json())
  .then((data) => (count = data.info.count));

// Synchronously get max number of characters
// async function getCount(number) {
//   const response = await fetch(apiCharacter, init);
//   const data = await response.json();
//   number = await data.info.count;
// }

function drawNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Binary semaphore
let readyData = false;
let cursorLocked = false;

// Params
let character = {};
let imageBlob = new Blob();

async function main(params) {
  let response = null;

  // btnGenerate enabled in event finish portalFading()
  btnGenerate.disabled = true;
  readyData = false;

  // Animation objects instances
  const anmFading = portalFading();
  const anmSpinning = portalSpinning(anmFading);
  const anmAppearing = portalAppearing(anmFading, anmSpinning); // Fast and Slow

  anmAppearing.play();

  // Draw character number
  const characterNumber = drawNumber(count);

  // Get json from API
  response = await fetch(`${apiCharacter}${characterNumber}`, init);
  character = await response.json();

  // Get image URL in response (character.image)
  // Get image from API
  response = await fetch(character.image, init);
  imageBlob = await response.blob();

  readyData = true;
}
// variable boolean to lock/unlock custom mouse cursor
// get position relative by button
// mirror mouse cursor
// rotate the mouse cursor relative to the center of the button
// create shooting animation, from the center of the cursor to the center of the button
// add laser sound

function setImage(blob) {
  // Create object from image
  const imageObjectURL = URL.createObjectURL(blob);

  // Insert image in html
  image.src = imageObjectURL;
  // ??? URL.revokeObjectURL(imageObjectURL); ???
}

function fillGrid(data) {
  valId.innerText = data.id;
  valName.innerText = data.name;
  valStatus.innerText = data.status;
  valSpecies.innerText = data.species;
  valGender.innerText = data.gender;
}

// ===== Resize functions =====
function resizeTitle() {
  const titleHeight = header.offsetHeight;

  const titleNewFontSize = titleHeight * 0.5;
  title.style.fontSize = titleNewFontSize + "px";

  const titleNewPadding = titleHeight * 0.25;
  title.style.padding = titleNewPadding + "px";
}

function resizeRows() {
  // === Heigth of Grid ====
  // 4% of padding (2% * (top and botton))
  // 8% of gap (2% * (4 * spaces between rows))
  // 100% - 12% = 88% = 0.88
  // === Heigth of Rows ====
  // 88% / 5 = 17.6% = 0.176
  // 17.6 each row
  // 05.50% border
  // 24.50% padding
  // 70.00% content
  // 100% Total
  // ------
  // 02.75% border-top
  // 12.25% padding-top
  // 70.00% content
  // 12.25% padding-bottom
  // 02.75% border-bottom
  // ------

  // Largest constant word for line break
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
  const footerHeight = footer.offsetHeight;

  const footerNewFontSize = footerHeight * 0.8;
  footer.style.fontSize = footerNewFontSize + "px";

  const footerNewPadding = footerHeight * 0.1;
  footer.style.padding = footerNewPadding + "px";
}

function resizePortal() {
  // +5% margin due to irregular circumference
  const hypotenuse = image.width * Math.sqrt(2) * 1.05;
  const moveUp = (hypotenuse - image.height) / 2;

  imgPortal.style.width = hypotenuse + "px";
  imgPortal.style.height = hypotenuse + "px";

  imgPortal.style.top = -moveUp + "px";
}

// ===== Animation functions =====
function portalAppearing(hookAnmFast, hookAnmSlow) {
  // const myAnimation = new Animation(
  //   new KeyframeEffect(
  //     /*target*/,
  //     [/*Keyframes*/ {/*from*/}, {/*to*/},],
  //     {/*KeyframeEffectOptions*/, /*duration: , easing: */}
  //   )
  // );
  // myAnimation.play();

  const anmAppear = new Animation(
    new KeyframeEffect(
      imgPortal, // Target
      [
        // Keyframes
        {
          // From
          opacity: 1,
          display: "none",
          transform: "rotate(0deg) scale(0)",
        },
        {
          // To
          opacity: 1,
          display: "inline",
          transform: "rotate(720deg) scale(1)",
        },
      ],
      {
        // KeyframeEffectOptions
        duration: 750,
        easing: "ease-out",
        // fill: "forwards",
      }
    ),
    document.timeline
  );

  anmAppear.addEventListener("finish", () => {
    if (readyData) {
      // Fast
      setImage(imageBlob);
      fillGrid(character);
      hookAnmFast.play(); // portalFading()
    } else {
      // Slow
      hookAnmSlow.play(); // portalSpinning()
    }
  });

  return anmAppear;
}

function portalSpinning(hookAnimation) {
  const anmSpin = new Animation(
    new KeyframeEffect(
      imgPortal,
      [
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(0deg)",
        },
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 750,
        easing: "linear",
        // fill: "forwards",
        // iterations: 3,
      }
    ),
    document.timeline
  );

  anmSpin.addEventListener("finish", () => {
    if (readyData) {
      // Fast
      setImage(imageBlob);
      fillGrid(character);
      hookAnimation.play(); // portalFading()
    } else {
      // Slow
      anmSpin.play(); // Loop
    }
  });

  return anmSpin;
}

function portalFading() {
  const anmFade = new Animation(
    new KeyframeEffect(
      imgPortal,
      [
        {
          opacity: 1,
          display: "inline",
          transform: "rotate(0deg)",
        },
        {
          opacity: 0,
          display: "none",
          transform: "rotate(0deg)",
        },
      ],
      {
        duration: 750,
        easing: "ease-out",
        fill: "forwards",
      }
    ),
    document.timeline
  );

  anmFade.addEventListener("finish", () => {
    btnGenerate.disabled = false;
  });

  return anmFade;
}

function gifOverlayPassing() {
  const rightBorder = header.offsetWidth - header.offsetHeight * 0.75;
  imgLightning.animate(
    [{ display: "inline" }, { left: rightBorder + "px" }],
    1250
  );
}

// ===== Events =====
window.addEventListener("load", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
  gifOverlayPassing();
  resizePortal();
});

window.addEventListener("resize", () => {
  resizeTitle();
  resizeRows();
  resizeButton();
  resizeFooter();
  resizePortal();
});

// ==== Separate mouse and touch events ===

btnGenerate.addEventListener("click", main);

btnGenerate.addEventListener("mousedown", () => {
  cursorLocked = true;
  console.log("Cursor travado!");
});

btnGenerate.addEventListener("touchmove", (ev) => {
  const rectX = mainTag.getBoundingClientRect().left;
  const rectY = mainTag.getBoundingClientRect().top;
  const touchX = ev.touches[ev.touches.length - 1].clientX;
  const touchY = ev.touches[ev.touches.length - 1].clientY;
  const centerCrsX = crsPortalGun.width / 2;
  const centerCrsY = crsPortalGun.height / 2;

  crsPortalGun.style.visibility = "visible";
  crsPortalGun.style.left = `${touchX - rectX - centerCrsX}px`;
  crsPortalGun.style.top = `${touchY - rectY - centerCrsY}px`;

  // Create image tag in HTML.
  // start with hide
  // On touch reveal image
  // move image with coordinate of touch
});

btnGenerate.addEventListener("mouseover", (event) => {
  // btnGenerate.style.cursor = 'url("crs_Portal_gun_1.cur"), auto';
  html.style.cursor = 'url("crs_Portal_gun_1.cur"), auto';
  console.log(`(x:y) => (${event.offsetX}:${event.offsetY})`);
});

// btnGenerate.addEventListener("mouseout", () => {
//   if (!cursorLocked) {
//     btnGenerate.style.cursor = "auto";
//     console.log("Destravado!");
//   }
// });

header.addEventListener("click", () => {
  gifOverlayPassing();
  audLightning.play();
});
