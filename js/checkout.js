"use strict";
function getElementValueByID(elementID) {
  const element = document.getElementById(elementID);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}
function setElementValueByID(value, ID) {
  const element = document.getElementById(ID);
  element.innerText = value;
}
function phoneAndCaseTotalCost() {
  //calculate total
  const phonePrice = getElementValueByID("updated-phone-price");
  const casePrice = getElementValueByID("updated-case-price");
  const subTotal = phonePrice + casePrice;
  setElementValueByID(subTotal, "subtotal-element");
  //calculate tax
  const taxAmountString = (subTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setElementValueByID(taxAmount, "tax");
  //final amoung
  const finalAmount = subTotal + taxAmount;
  setElementValueByID(finalAmount, "final-amount");
}
// document.getElementById("checkout-btn").addEventListener("click", function () {
//   console.log("clicked");
// });
