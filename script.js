//DOM elements
const divId = document.getElementById("div-id");
const divName = document.getElementById("div-name");
const divStatus = document.getElementById("div-status");
const divSpecies = document.getElementById("div-species");
const divGender = document.getElementById("div-gender");
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
    divId.innerText = character.id;
    divName.innerText = character.name;
    divStatus.innerText = character.status;
    divSpecies.innerText = character.species;
    divGender.innerText = character.gender;

    // let btnHeight = btnSort.offsetHeight * 0.75;
    // btnSort.style.fontSize = btnHeight + 'px';
    // console.log(btnSort.offsetHeight);

}

btnSort.addEventListener("click", main);
    
