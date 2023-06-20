let normalText =  document.getElementById("normal-text");
let cipherText =  document.getElementById("cipher-text");
let submitButton =  document.getElementById("submit-button");
let indexInput =  document.getElementById("index-input");
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

submitButton.onclick = function () { 
    cipherText.value = "";
    console.log(alphabet.length);
    
    for (let letter in normalText.value) {
        if (normalText.value[letter] == " ") {
            cipherText.value += " ";
            continue;
        }
        
        let alphabetIndex = alphabet.indexOf(normalText.value[letter].toLowerCase());
        let cipherIndex = parseInt(indexInput.value) + alphabetIndex;
        
        if (cipherIndex < 0) {
            cipherText.value += alphabet[26 + cipherIndex];
            continue;
        }
        if (cipherIndex > 25) {
            cipherText.value += alphabet[cipherIndex - 26];
            continue;
        }
        cipherText.value += alphabet[cipherIndex];
    } 
}

let addButton =  document.getElementById("add-button");
let subtractButton =  document.getElementById("subtract-button");

addButton.onclick = function () { 
    indexInput.value++;
}
subtractButton.onclick = function () { 
    indexInput.value--;
}