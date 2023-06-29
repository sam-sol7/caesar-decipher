let normalText =  document.getElementById("normal-text");
let cipherText =  document.getElementById("cipher-text");
let submitButton =  document.getElementById("submit-button");
let indexInput =  document.getElementById("index-input");
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

submitButton.onclick = function () { 
    cipherText.value = ""; 
    
    for (let letter in normalText.value) {
        if (!alphabet.includes(normalText.value[letter])) {
            cipherText.value += normalText.value[letter];
            continue;
        }
        let alphabetIndex = alphabet.indexOf(normalText.value[letter].toLowerCase());
        let isItLowerCase = (normalText.value[letter] == normalText.value[letter].toLowerCase()) ? true : false; 
        let cipherIndex = parseInt(indexInput.value) + alphabetIndex;
        
        if (cipherIndex < 0) {
            if (isItLowerCase) cipherText.value += alphabet[ (((cipherIndex % 26) + 26) % 26) ];
            else cipherText.value += alphabet[ (((cipherIndex % 26) + 26) % 26) ].toUpperCase();
            continue;
        }
        if (cipherIndex > 25) {
            if (isItLowerCase) cipherText.value += alphabet[cipherIndex % 26];
            else cipherText.value += alphabet[cipherIndex % 26].toUpperCase();
            continue;
        }
        if (isItLowerCase) cipherText.value += alphabet[cipherIndex];
        else cipherText.value += alphabet[cipherIndex].toUpperCase();
    } 
}

let copyButton =  document.getElementById("copy-button");
copyButton.onclick = function () { 
    navigator.clipboard.writeText(cipherText.value);
}

let addButton =  document.getElementById("add-button");
let subtractButton =  document.getElementById("subtract-button");
addButton.onclick = function () { 
    indexInput.value++;
}
subtractButton.onclick = function () { 
    indexInput.value--;
}