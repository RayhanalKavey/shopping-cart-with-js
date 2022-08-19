"use strict";
//Phone + button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updateTotalPrice(newPhoneNumber, "updated-phone-price");
  });
//Phone - button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updateTotalPrice(newPhoneNumber, "updated-phone-price");
  });
