document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-button");
    var navMenuWrapper = document.querySelector(".nav-menu-wrapper");

    menuButton.addEventListener("click", function () {
        navMenuWrapper.classList.toggle("show");
    });
});