"use strict";
//Phone case + button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});
//Phone case - button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber(false);
  });
