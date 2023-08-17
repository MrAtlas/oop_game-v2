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
                li.className = ` hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
            }
            ul.appendChild(li);
        }
    }

    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter){
        const matchedLetter = document.getElementsByClassName(letter);

        for(let i = 0; i < matchedLetter.length; i++){
            matchedLetter[i].classList.remove('hide');
            matchedLetter[i].classList.add('show');
        }
    }
}