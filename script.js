// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger');

    menu.classList.toggle('menu-active'); // Open/close menu
    overlay.classList.toggle('overlay-active'); // Show/hide overlay
    hamburger.classList.toggle('menu-open'); // Toggle hamburger icon animation
}
