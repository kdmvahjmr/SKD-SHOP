function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const body = document.body;

    // Toggle the class "open" to show or hide the navbar
    navbar.classList.toggle('open');

    // Toggle the "menu-open" class on the body to apply the dark background
    body.classList.toggle('menu-open');
}
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let slideContainer = document.querySelector(".slideshow-container");

    // Slide to the next one
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide when we reach the end
    }

    // Apply the sliding effect
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Change slide every 5 seconds
    setTimeout(showSlides, 1500);
}

// Start the slideshow
showSlides();
let cart = [];  // Array to hold the cart items

// Function to add product to cart
function addToCart(productName, price) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // If it exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // Otherwise, add the product to the cart with quantity 1
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Update the cart count on the page
    updateCartCount();
}

// Function to view the cart
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Create a string to display cart items
    let cartDetails = "Your Cart:\n";
    let totalPrice = 0;

    // Loop through the cart items to add them to the string
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
        totalPrice += item.price * item.quantity;
    });

    cartDetails += `\nTotal: $${totalPrice}`;

    // Display the cart details
    alert(cartDetails);
}

// Function to update the cart count
function updateCartCount() {
    // Get the total number of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Update the cart count display
    const cartCount = document.getElementById('cart-count');
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.add('visible');  // Show the cart count
    } else {
        cartCount.classList.remove('visible');  // Hide the cart count
    }
}

