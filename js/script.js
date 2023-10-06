document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.querySelectorAll(".plus-btn");
    const minusButtons = document.querySelectorAll(".minus-btn");
    const quantityInputs = document.querySelectorAll(".quantity-input");

    plusButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const currentValue = parseInt(quantityInputs[index].value);
            if (currentValue > 1) {
                quantityInputs[index].value = currentValue - 1;
            }
        });
    });
});
