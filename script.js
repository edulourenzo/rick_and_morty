
//Initialization
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
