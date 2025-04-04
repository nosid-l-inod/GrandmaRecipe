const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const body = document.body;
const closeMenuBtn = document.getElementById("close-menu");

// Display the menu
menuToggle.addEventListener('click', (event) => {
    body.classList.toggle("visible-menu");
})

// Close the menu with close button
closeMenuBtn.addEventListener('click', (event) => {
    body.classList.remove("visible-menu");
})

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    const clickMenu = menu.contains(event.target);
    const clickToggle = menuToggle.contains(event.target);

    if (!clickMenu && !clickToggle && body.classList.contains("visible-menu")) {
        body.classList.remove("visible-menu");
    }    
})