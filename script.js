//DOM elements
const spanId = document.getElementById("span-id");
const spanName = document.getElementById("span-name");
const spanStatus = document.getElementById("span-status");
const spanGender = document.getElementById("span-gender");
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

    //get json from API
    response =  await fetch(`${apiCharacter}${characterNumber}`, init);
    const character = await response.json();

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
    spanId.innerText = character.id;
    spanName.innerText = character.name;

    let translation = '';
    //('Alive', 'Dead' or 'unknown')
    switch (character.status) {
        case 'Alive':
            translation = 'Vivo';
            break;
        
        case 'Dead':
            translation = 'Morto';
            break;
        
        case 'unknown':
            translation = 'Desconhecido';
            break;

        default:
            translation = '';
            break;
    }
    spanStatus.innerText = translation;

    //('Female', 'Male', 'Genderless' or 'unknown')
    switch (character.gender) {
        case 'Female':
            translation = 'Feminino';
            break;

        case 'Male':
            translation = 'Masculino';
            break;

        case 'Genderless':
            translation = 'Sem gênero';
            break;

        case 'unknown':
            translation = 'desconhecido';
            break;

        default:
            translation = '';
            break;
    }
    spanGender.innerText = translation;

}

randomly.addEventListener("click", main);
    
