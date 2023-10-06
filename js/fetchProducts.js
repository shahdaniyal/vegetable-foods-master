const productContainers = document.querySelectorAll('.product');

productContainers.forEach(container => {
  const plusButton = container.querySelector('.plus');
  const minusButton = container.querySelector('.minus');
  const quantityValue = container.querySelector('.quantity-value');
  const addToCartButton = container.querySelector('.add-to-cart');

  let quantity = 0;

  plusButton.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
  });

  minusButton.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });

  addToCartButton.addEventListener('click', () => {
    if (quantity > 0) {
      alert(`Added ${quantity} item(s) to cart`);
      // You can add further logic to update the cart or perform other actions
    }
  });
});
