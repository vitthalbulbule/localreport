 // script.js
document.addEventListener('click', function (e) {
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = menuButton.parentElement;

    // Check if the clicked element is the menu button
    if (menuButton.contains(e.target)) {
        dropdownMenu.classList.toggle('active'); // Toggle the 'active' class
    } else {
        // Close dropdown and reset caret if clicked outside
        dropdownMenu.classList.remove('active');
    }
});