"use strict";

//ParT Update + or - button funciton
//(case number will a inteser number so we need to use parseInt)
function updateCaseNumber(increase) {
  const inputField = document.getElementById("case-number-field");
  const previousCaseNumber = parseInt(inputField.value);
  let newCaseNumber;
  if (increase === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    //case number cannot be negative
    if (previousCaseNumber <= 1) {
      newCaseNumber = 1;
    } else newCaseNumber = previousCaseNumber - 1;
  }
  inputField.value = newCaseNumber;
}
