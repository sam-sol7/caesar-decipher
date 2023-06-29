const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let normalText =  document.getElementById("normal-text");
let cipherText =  document.getElementById("cipher-text");
let submitButton =  document.getElementById("submit-button");
let indexInput =  document.getElementById("index-input");
let isItEncode = true;

submitButton.onclick = function () { 
    cipherText.value = ""; 

    for (let letter in normalText.value) {
        if (!alphabet.includes(normalText.value[letter].toLowerCase())) {
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

let encodeButton =  document.getElementById("encode-button");
let decodeButton =  document.getElementById("decode-button");
encodeButton.onclick = function () { 
    if (encodeButton.classList.contains("active")){
        encodeButton.classList.remove("active");
        decodeButton.classList.add("active"); 
        isItEncode = false;
    } else {
        encodeButton.classList.add("active");
        decodeButton.classList.remove("active"); 
        isItEncode = true;
    }
}
decodeButton.onclick = function () { 
    if (decodeButton.classList.contains("active")){
        decodeButton.classList.remove("active");
        encodeButton.classList.add("active"); 
        isItEncode = true;
    } else {
        decodeButton.classList.add("active");
        encodeButton.classList.remove("active"); 
        isItEncode = false;
    }
}