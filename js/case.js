"use strict";
//Phone case + button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const previousCaseNumber = getInputValueByID("case-number-field");
  const newCaseNumber = previousCaseNumber + 1;
  setInputValueByID("case-number-field", newCaseNumber);
});
//Phone case - button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const previousCaseNumber = getInputValueByID("case-number-field");
    if (previousCaseNumber <= 0) {
      return;
    }
    const newCaseNumber = previousCaseNumber - 1;
    setInputValueByID("case-number-field", newCaseNumber);
  });
