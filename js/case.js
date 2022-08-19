"use strict";
//Phone case + button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  updateTotalPrice(newCaseNumber, "updated-case-price");
});
//Phone case - button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalPrice(newCaseNumber, "updated-case-price");
  });
