let addButton =  document.getElementById("add-button");
let indexInput =  document.getElementById("index-input");
let subtractButton =  document.getElementById("subtract-button");

addButton.onclick = function () { 
    indexInput.value++;
}
subtractButton.onclick = function () { 
    indexInput.value--;
}