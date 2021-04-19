// apiScript.js     
// const fetch = require('node-fetch');

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => {
//       showJoke(data.joke)
//     }); // retorna objeto json. queremos pegar data.joke
// };

// fetchJoke();

// const showJoke = (joke) => {
//   const jokeContainer = document.querySelector('#jokeContainer');
//   const elementP = document.createElement('p');
//   elementP.innerHTML = joke;
//   jokeContainer.appendChild(elementP);
// }

// apiScript.js     
// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  try {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    return data.joke
  }
  catch(erro) {
    console.log(erro);
  }
  // .then(response => response.json())
  // .then(data => {
  //   showJoke(data.joke)
}

const showJoke = async () => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const elementP = document.createElement('p');
  elementP.innerHTML = await fetchJoke();
  jokeContainer.appendChild(elementP);
};

showJoke();