/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//MrAtlas

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const phraseDiv = document.getElementById('phrase');
        const ul = phraseDiv.firstElementChild;

        for (let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('li');
            if(this.phrase[i] === ' '){
                li.className = 'space';
            }else{
                li.className = 'letter';
                li.textContent = this.phrase[i];
            }
            ul.appendChild(li);
        }
    }

    checkLetter(){
        
    }

    showMatchedLetter(){

    }
}