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

//Update Phone number count
function updateNumber(increase, priceElementID) {
  const inputField = document.getElementById(priceElementID);

  const inputFieldValue = parseInt(inputField.value);
  let newNumberCount;
  if (increase === true) {
    newNumberCount = inputFieldValue + 1;
  } else {
    if (inputFieldValue <= 0) {
      newNumberCount = 0;
    } else {
      newNumberCount = inputFieldValue - 1;
    }
  }
  inputField.value = newNumberCount;
  return newNumberCount;
}

function updateTotalPrice(newNumber, priceElementID) {
  const priceElement = document.getElementById(priceElementID);
  let totalPrice;
  if (priceElementID === "updated-case-price") {
    totalPrice = newNumber * 59;
  } else if (priceElementID === "updated-phone-price") {
    totalPrice = newNumber * 1219;
  }
  priceElement.innerText = totalPrice;
}
