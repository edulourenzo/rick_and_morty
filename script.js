//DOM elements
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

let count = 2; //async safeguard (Rick and Morty).
fetch(apiCharacter, init)
    .then((response) => (response.json()))
    .then((data) => {
        count = data.info.count;
    });

function drawNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

randomly.addEventListener("click", function () {

    const id = drawNumber(count);
    console.log(id);
    fetch(`${apiCharacter}${id}`, init)
        .then((response) => (response.json()))
        .then((data) => {
            console.log(data);
        });

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
})