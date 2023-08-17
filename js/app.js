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

startGameButton.addEventListener('click', () => {
    resetGame();
    game = new Game();
    game.startGame();
})


keyboardDiv.addEventListener('click', (e) => {
    //console.log(e.target.textContent)
    game.handleInteraction(e.target);
})

document.addEventListener('keydown', (e) => {
    //console.log(e.key)

    const keyPressed = document.getElementsByClassName('key');
    
    for(let i = 0; i < keyPressed.length; i++){
        if(keyPressed[i].textContent === e.key) {
            game.handleInteraction(keyPressed[i]);
        }
    }
    
})
