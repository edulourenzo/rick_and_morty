//DOM elements
const valId = document.getElementById("val-id");
const valName = document.getElementById("val-name");
const valStatus = document.getElementById("val-status");
const valSpecies = document.getElementById("val-species");
const valGender = document.getElementById("val-gender");
const btnSort = document.getElementById("btn-sort");

//Initialization of API
const apiCharacter = 'https://rickandmortyapi.com/api/character/';
const init = {
    method: 'GET',
    headers: {
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

    // let btnHeight = btnSort.offsetHeight * 0.75;
    // btnSort.style.fontSize = btnHeight + 'px';
    // console.log(btnSort.offsetHeight);

    // let keySibling = valId.previousElementSibling.offsetHeight;
    // console.log(`Key = ${keySibling}`);

}

btnSort.addEventListener("click", main);
window.addEventListener("load", (event) => {
    resizeHeader();
    resizeGrid();
    resizeFooter();
});

function resizeHeader() {

}

function resizeGrid() {

}

function resizeFooter() {

}