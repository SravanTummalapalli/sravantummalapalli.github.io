document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navbarNav = document.getElementById("navbarNav");

    hamburger.addEventListener("click", function() {
        navbarNav.classList.toggle("show");
    });
});
