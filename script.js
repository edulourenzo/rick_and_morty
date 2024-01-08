//DOM elements
const title = document.getElementsByTagName("h1");
const gridCCntr = document.getElementById("grid-container");
const valId = document.getElementById("val-id");
const valName = document.getElementById("val-name");
const valStatus = document.getElementById("val-status");
const valSpecies = document.getElementById("val-species");
const valGender = document.getElementById("val-gender");
const btnGenerate = document.getElementById("btn-generate");
const footer = document.getElementsByTagName("footer");


//Initialization of API
const apiCharacter = 'https://rickandmortyapi.com/api/character/';
const init = {
    method: 'GET',
    Titles: {
        Accept: 'application/json',
        "Content-type": 'aplication/json'
    }
};

//const myPromise = new Promise((resolve, reject) => {});
//Promise.resolve("input").then(onfulfilled, onrejected);
//Promise.reject("input").then(onfulfilled).catch(onrejected);
//...
// async function () => { 
//     let x; 
//     try {x = await new Promise.resolve("input");} 
//     catch (err) {x = await new Promise.reject("input"); console.log(err);}}

let count = 2; //async safeguard (Rick and Morty).

//get max number of characters
fetch(apiCharacter, init)
    .then((response) => (response.json()))
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
    response =  await fetch(`${apiCharacter}${characterNumber}`, init);
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

    const newHTitle = title[0].parentElement.offsetHeight;

    const textHTitle = newHTitle * 0.5;
    title[0].style.fontSize = textHTitle + 'px';

    const paddingTitle = newHTitle * 0.25;
    title[0].style.padding = paddingTitle + 'px';
}

function resizeGrid() {
    //Largest constant word for line break
    const newHGrid = valSpecies.offsetHeight;
    const textHGrid = newHGrid * 0.75;
    const paddingGrid = newHGrid * 0.125 - 3;
    // const cssValSpecies = window.getComputedStyle(valSpecies);

    const numChildren = gridCCntr.childElementCount;
    for(let i = 0; i < numChildren; i++) {
        gridCCntr.children[i].style.fontSize = textHGrid + 'px';
        gridCCntr.children[i].style.padding = paddingGrid + 'px';
    }
}

function resizeButton() {
    const newHButton = btnGenerate.offsetHeight;

    const textHButton = newHButton * 0.5;
    btnGenerate.style.fontSize = textHButton + 'px';

    const paddingButton = newHButton * 0.25;
    btnGenerate.style.padding = paddingButton + 'px';
}

function resizeFooter() {

    const newHFooter = footer[0].offsetHeight;

    //CORREÇÃO FUTURA: ajustar padding e border ao tamanho das fontes dinâmicas.
    const textHFooter = (newHFooter * 0.8) - 6;
    footer[0].style.fontSize = textHFooter + 'px';

    const paddingFooter = newHFooter * 0.1;
    footer[0].style.padding = paddingFooter + 'px';
}


btnGenerate.addEventListener("click", main);
window.addEventListener("load", () => {
    resizeTitle();
    resizeGrid();
    resizeButton();
    resizeFooter();
});

window.addEventListener('resize', () => {
    resizeTitle();
    resizeGrid();
    resizeButton();
    resizeFooter();
});