"use strict";
//Phone + button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateNumber(true, "phone-number-field");
    updateTotalPrice(newPhoneNumber, "updated-phone-price");
  });
//Phone - button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updateNumber(false, "phone-number-field");
    updateTotalPrice(newPhoneNumber, "updated-phone-price");
  });
