import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./details.js";

let characters = [];

const setCharacters = (newArray) => {
  characters = newArray;
};

const characterClick = (e) => {
  const characterId = e.target.closest('.character-card').id;
  const currentCharacter = characters.find(x => x.id === characterId);
  
  console.log('currentCharacter', currentCharacter);
};

const createEvents = () => {
  const characterCards = document.getElementsByClassName('character-card');
  for(let i=0; i<characterCards.length; i++){
    characterCards[i].addEventListener('click', characterClick);
  }
};


const sortPeople = (e) => {
  const house = e.target.id;
  const filteredPeeps = characters.filter(x => x.house ===house);
  charactersBuilder(filteredPeeps);//passing in peeps//
//now you need a IF STATEMENT  //filter is when you are returning multiple things.. FIND is when we are looking for the first one that matches
  if(house==='ALL'){
    charactersBuilder(characters);
    } else {

    // const (filteredPeeps);

  }
  console.log('you hit sort',e.target.id);
};


const sortEvents =() => {///where should I call this? what is a good way to remember where to call when I have to add new functions? 
  const allButton = document.getElementById('All');
  const starkButton = document.getElementById('stark');
  allButton.addEventListener('click',sortPeople);
  starkButton.addEventListener('click',sortPeople);
};
const getCharacterz =() => {
  return characters;
  //this returns the characterArray
};

const charactersBuilder = (characterArray) => {
  let domString = '';
  characterArray.forEach((character) => {
    domString += `<div class="col-2 character-card" id="${character.id}">`
    domString +=   `<div class="card">`;
    domString +=    `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
    domString +=    `<div class="card-body">`;
    domString +=      `<h5 class="card-title">${character.name}</h5>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=`</div>`;
  });
  printToDom(domString);
  createEvents();
};

export {charactersBuilder,setCharacters,getCharacterz,sortEvents};//everything here must be in a import
