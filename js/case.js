"use strict";
//Phone case + button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateNumber(true, "case-number-field");

  updateTotalPrice(newCaseNumber, "updated-case-price");
});
//Phone case - button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateNumber(false, "case-number-field");
    updateTotalPrice(newCaseNumber, "updated-case-price");
  });
