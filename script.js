//DOM elements
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

randomly.addEventListener("click", function () {
    // for(i = 0; i < 10; i++)
    // {
    //     const rand = Math.floor(Math.random() * count) + 1;
    //     console.log(rand);
    // }
    // console.log("\n===\n\n");
})