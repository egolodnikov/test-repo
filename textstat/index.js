/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    var text = document.getElementById('text').value.toLowerCase()
    var length = document.getElementById('text').value.length
    var valCharCount = document.getElementById('valCharCount')
    var valSpacesCount = document.getElementById('valSpacesCount')
    var valVowelsCount = document.getElementById('valVowelsCount')
    var valConsonantsCount = document.getElementById('valConsonantsCount')
    var valWordsCount = document.getElementById('valWordsCount')
    var tmp

    function countChars(){
        tmp = length;
        valCharCount.value = tmp;
    }

    function countSpaces(){
        var counter = 0;
        for(var i=0; i<length; i++){
            if (' ' === text[i]){
                counter++;
            }
        }
        valSpacesCount.value = counter;
    }

    function countVowels(){
        var counter = 0;
        vowels = 'aeiouy'
        for(var i=0; i<length; i++){
            for(var j=0; j<vowels.length; j++){
                if (vowels[j] === text[i]){
                    counter++;
                }
            }
        }
        valVowelsCount.value = counter;
    }

    function countConsonants(){
        var counter = 0;
        consonants = 'qwrtpsdfghjklzxcvbnm'
        for(var i=0; i<length; i++){
            for(var j=0; j<consonants.length; j++){
                if (consonants[j] === text[i]){
                    counter++;
                }
            }
        }
        valConsonantsCount.value = counter;
    }

    function countWords(){
        var counter = 0;
        var splitWords = text.split(' ')
        valWordsCount.value = splitWords.length;
    }

    if(event.type == 'click'){
        countChars()
        countSpaces()
        countVowels()
        countConsonants()
        countWords()
    }
    console.log('onStatisticsClicked called');
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    var valOddWords = document.getElementById('valOddWords')
    var text = document.getElementById('text').value
    var tmp = ''

    function createOddWords(){
        var counter = 0;
        var splitWords = text.split(' ')

        for(var i=0; i<splitWords.length; i++){
            if (i % 2 == 0){
               tmp += splitWords[i] + ' '
            }
        }
    }
    if (event.type == 'click'){
        createOddWords()
    }
    valOddWords.value = tmp
    console.log('onRemoveWordsClicked called');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
