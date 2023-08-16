/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//MrAtlas

//const phrase = new Phrase('Life is a box of choccolates');


//console.log(phrase.phrase)
//console.log(game.getRandomPhrase().phrase);
//game.startGame();
//game.getRandomPhrase().addPhraseToDisplay();

let game;

const startGameButton = document.getElementById('btn__reset');

const keyboardDiv = document.getElementById('qwerty');
const keyboardButtons = keyboardDiv.querySelectorAll('button');

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})



keyboardDiv.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    game.handleInteraction();
})