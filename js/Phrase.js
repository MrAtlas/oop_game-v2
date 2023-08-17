/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//MrAtlas

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    //this will get the ul element and for each char of the phrase will create a li element
    //if it's a space it will add the space class else the hide letter with the letter char, append to the ul
    //as for the example image
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

    //checkLetter will get a letter parameter and return true or false if the prase include that letter
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    //also will get a letter parameter and get the element that has the same classname of that letter
    //then it loops trough the array of those letters *as it might be more than one
    //and it add the show call and removes the hide class
    showMatchedLetter(letter){
        const matchedLetter = document.getElementsByClassName(letter);

        for(let i = 0; i < matchedLetter.length; i++){
            matchedLetter[i].classList.remove('hide');
            matchedLetter[i].classList.add('show');
        }
    }
}