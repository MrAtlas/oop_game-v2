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

    startGame(){
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }

    handleInteraction(){

    }

    removeLife(){

    }

    checkForWin(){

    }

    gameOver(){

    }
}