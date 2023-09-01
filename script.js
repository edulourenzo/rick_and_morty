//DOM elements
const image = document.getElementById("image");
const divId = document.getElementById("container-id");
const divName = document.getElementById("container-name");
const divStatus = document.getElementById("container-status");
const divGender = document.getElementById("container-gender");
const randomly = document.getElementById("randomly");

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
// async function () => { 
//     let x; 
//     try {x = await new Promise.resolve("input");} 
//     catch (err) {x = await new Promise.reject("input"); console.log(err);}}

let count = 2; //async safeguard (Rick and Morty).

fetch(apiCharacter, init)
    .then((response) => (response.json()))
    .then((data) => (count = data.info.count));

async function getCount(number) {
    const response = await fetch(apiCharacter, init);
    const data = await response.json();
    number = await data.info.count;
    console.log(`O valor de number é: ${number}`);

}

function drawNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

async function main(params) {
    let response = null;
    
    //draw character number
    const characterNumber = drawNumber(count);
    console.log(`Número sorteado: ${characterNumber}`);

    //get json from API
    response =  await fetch(`${apiCharacter}${characterNumber}`, init);
    const character = await response.json();
    console.log(character);

    //get url from response
    //character.image
    console.log(`URL da imagem: ${character.image}`);
    
    //get image from API
    response = await fetch(character.image, init);
    const imageBlob = await response.blob();
    console.log(imageBlob);

    // create object from image
    const imageObjectURL = URL.createObjectURL(imageBlob);
    console.log(`Objeto da imagem: ${imageObjectURL}`);
    //(future) set animation
    //{...}

    //insert image in to html
    image.src = imageObjectURL;
    //??? URL.revokeObjectURL(imageObjectURL); ???

    //insert info in grid layout
    //{...}
    
}

randomly.addEventListener("click", main);
    

// let description;
// let symbol;
// let value;

// description = document.createElement("span");
// description.appendChild(document.createTextNode("Estado: "));


// symbol = document.createElement("span");
// symbol.appendChild(document.createTextNode("\u271D"));

// value = document.createElement("span");
// value.appendChild(document.createTextNode("Morto"));

// divStatus.appendChild(description);
// divStatus.appendChild(symbol);
// divStatus.appendChild(value);
// console.log(divStatus);