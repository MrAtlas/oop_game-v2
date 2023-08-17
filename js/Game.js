/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//MrAtlas

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('May the Force be with you'),
            new Phrase('I have a bad feeling about this'),
            new Phrase('Hello There'),
            new Phrase('No I am your father'),
            new Phrase('I am one with force'),
        ];
        this.activePhrase = null;
    }

    //This will get the overlay and set display to none, activePrase will be set to the random phrase function 
    startGame(){
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }

    //return a random index from the phrases array
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }

    //pass the button parameter, disable it, use the check letter function of the phrase to the button text (letter)
    //if not correct add class wrong and remove a life
    //if correct add class chosen, show the letter and check for win
    handleInteraction(button){
        button.disabled = true;
        const correctLetter = button.textContent;
        const isCorrectLetter = this.activePhrase.checkLetter(correctLetter);

        if (!isCorrectLetter){
            button.classList.add('wrong');
            this.removeLife()
        }else{
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(correctLetter);
            if(this.checkForWin()){
                this.gameOver(true)
            }
        }
    }

    //get all the heart images, if missed is less than 5 replace the image with a lost heart image, increment missed
    //in this case missed is = 0
    //else if missed = 5 gameOver will be called to false as it it a lost
    removeLife(){
        const heartImages = document.querySelectorAll('.tries img');

        if (this.missed < 5){
            heartImages[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        }

        if(this.missed === 5){
            //const isWin = false;
            this.gameOver(false);
        }
        
    }

    //this will select all the boxes that have a class .hide
    //if the length of this array of elements is = 0 then it's a win
    //else is not a win (yet)
    checkForWin(){
        const hiddenLetter = document.querySelectorAll('.hide');
        if( hiddenLetter.length === 0){
            return true;
        }else {
            return false;
        }
    }

    //passed a parameter bool, it will display the overlay element and get the h1 message
    //if the parameter isWin is true then the class of the overlay is going to be win and message changed to you've won
    //else the class wil be lose and message of lost
    gameOver(isWin){
        const screenOverlay = document.getElementById('overlay');
        const h1Message = document.getElementById('game-over-message');
        screenOverlay.style.display = 'block';
        
        if(isWin){
            screenOverlay.className = 'win';
            h1Message.textContent = "YOU'VE WON!"
        }else{
            screenOverlay.className = 'lose';
            h1Message.textContent = "TOO BAD! WANNA TRY AGAIN?"
        }
    }
}