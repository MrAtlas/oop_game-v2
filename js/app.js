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
//const keyboardButtons = document.querySelectorAll('.key');

//I've added this fucntion to reset all the right guesses and wrong once, the showed letters and the lives
function resetGame(){
    const heartImages = document.querySelectorAll('.tries img');
    heartImages.forEach(image => image.src = 'images/liveHeart.png');

    const divBoxes = document.getElementById('phrase');
    const ul = divBoxes.firstElementChild;
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    const keyPressed = document.getElementsByClassName('key');

    //console.log(keyPressed)

    for(let i = 0; i < keyPressed.length; i++){
        keyPressed[i].disabled = false;
        keyPressed[i].classList.remove('wrong');
        keyPressed[i].classList.remove('chosen');
    }

}

//this will add an event listener for the start button that resets the game and creates a new one calling the startGame
startGameButton.addEventListener('click', () => {
    resetGame();
    game = new Game();
    game.startGame();
})

//simply listens for the keys in the div keyboard and calls the handleInteraction on the target
keyboardDiv.addEventListener('click', (e) => {
    //console.log(e.target.textContent)
    game.handleInteraction(e.target);
})

//same as above but this will let the user use a physical keyboard by getting the key and checking if there is in the 
//virtual keyboard
document.addEventListener('keydown', (e) => {
    //console.log(e.key)

    const keyPressed = document.getElementsByClassName('key');
    
    for(let i = 0; i < keyPressed.length; i++){
        if(keyPressed[i].textContent === e.key) {
            game.handleInteraction(keyPressed[i]);
        }
    }
    
})
