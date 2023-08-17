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
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }

    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }

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

    removeLife(){
        const heartImages = document.querySelectorAll('.tries img');

        if (this.missed < 5){
            heartImages[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        }

        if(this.missed === 5){
            const isWin = false;
            this.gameOver(isWin);
        }
        
    }

    checkForWin(){
        const hiddenLetter = document.querySelectorAll('.hide');
        if( hiddenLetter.length === 0){
            return true;
        }else {
            return false;
        }
    }

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