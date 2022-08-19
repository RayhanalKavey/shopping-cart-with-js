"use strict";
//Get and Set input value Function (case number will a inteser number so we need to use parseInt)
function getInputValueByID(ID) {
  const inputField = document.getElementById(ID);
  const inputValue = parseInt(inputField.value);
  return inputValue;
}
function setInputValueByID(ID, newValue) {
  const inputField = document.getElementById(ID);
  inputField.value = newValue;
}
