"use strict";
//Phone + button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
  });
//Phone - button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
  });
