var elForm = document.querySelector(".currency-form");
var elInput = elForm.querySelector(".currency-input");
var elSelect = document.querySelector(".currency-select");
var elAmount = document.querySelector(".currency-amount");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var inputValue = Number(elInput.value * elSelect.value);
    elAmount.textContent = inputValue;
})