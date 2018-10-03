//two functions one for when it loads and one when it fails
import {setCharacters,charactersBuilder} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
const data = JSON.parse(this.responseText);
setCharacters (data.characters);//this is the only part that will change
charactersBuilder ();//this is the only part that will change
// console.log ('request', data.characters);//this is your array/// I need this to be on characters.js line 4

//we basically took a BIG String and brougt it down
}

function executeThisCodeIfXhrFails () {
    console.log('shit broke');

}

const getCharacters = () => {
//this is a function
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded); //attached to the load event
myRequest.addEventListener( 'error', executeThisCodeIfXhrFails);//attached to the error event
myRequest.open('GET','./db/characters.json')//what are you trying to open. it takes 2 request. This is the only thing that changes
myRequest.send();//this actually runs the request. You need this to execute this

//everytime you do this copy this and just change the varabile name.
}

export {getCharacters};