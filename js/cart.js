// Get a reference to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to handle adding a product to the cart
function addToCart(event) {
    event.preventDefault();
    
    // Get product details from the clicked button's parent container
    const productContainer = event.target.closest('.product');
    const productName = productContainer.querySelector('h2').textContent;
    const productPrice = parseFloat(productContainer.querySelector('p').textContent.replace('$', ''));
    
    // Create a cart item object
    const cartItem = {
        name: productName,
        price: productPrice
    };
    
    // Add the cart item to the cart (you can use localStorage, cookies, or a backend to manage the cart)
    addToCartStorage(cartItem);

    // Display a confirmation message
    alert('Item added to cart!');
}

// Function to add a cart item to storage (localStorage in this example)
function addToCartStorage(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');

    // Get cart items from storage (localStorage in this example)
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    // Loop through each cart item and display it
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
}

// Call the displayCartItems function when the cart page is loaded
window.addEventListener('DOMContentLoaded', displayCartItems);

