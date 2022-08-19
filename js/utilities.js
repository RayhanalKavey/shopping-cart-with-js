"use strict";
//ParT Update + or - button funciton
//(case number will a inteser number so we need to use parseInt)
// function updateCaseNumber(increase) {
//   const inputField = document.getElementById("case-number-field");
//   const previousCaseNumber = parseInt(inputField.value);
//   const previousPriceField = document.getElementById("updated-price");
//   const previousPriceValue = parseFloat(previousPriceField.innerText);
//   let newCaseNumber, newPriceValue;
//   if (increase === true) {
//     newCaseNumber = previousCaseNumber + 1;
//     newPriceValue = previousPriceValue + 59;
//   } else {
//     //case number cannot be negative
//     if (previousCaseNumber <= 1) {
//       newCaseNumber = 1;
//       newPriceValue = 59;
//     } else {
//       newCaseNumber = previousCaseNumber - 1;
//       newPriceValue = previousPriceValue - 59;
//     }
//   }
//   inputField.value = newCaseNumber;
//   previousPriceField.innerText = newPriceValue;
// }
function updateCaseNumber(increase) {
  const inputField = document.getElementById("case-number-field");
  const previousCaseNumber = parseInt(inputField.value);

  let newCaseNumber;
  if (increase === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    //case number cannot be negative
    if (previousCaseNumber <= 0) {
      newCaseNumber = 0;
    } else {
      newCaseNumber = previousCaseNumber - 1;
    }
  }

  inputField.value = newCaseNumber;
  return newCaseNumber;
}
//Update-price function
function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("updated-case-price");
  caseTotalElement.innerText = caseTotalPrice;
}
