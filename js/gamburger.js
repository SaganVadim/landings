document.addEventListener("DOMContentLoaded", function () {
  var menudjghcfd = document.querySelector(".menu-djghcfd");
  var navOverlay = document.querySelector(".shdgsed-overlay");
  var menuItems = document.querySelectorAll(".nav-menu a");

  function openMenu() {
    navOverlay.style.display = "block";
    document.addEventListener("click", closeMenuOutside);
    window.addEventListener("hashchange", closeMenu);
  }

  function closeMenu() {
    navOverlay.style.display = "none";
    document.removeEventListener("click", closeMenuOutside);
    window.removeEventListener("hashchange", closeMenu);
  }

  function closeMenuOutside(event) {
    if (
      !navOverlay.contains(event.target) &&
      !menudjghcfd.contains(event.target)
    ) {
      closeMenu();
    }
  }

  menudjghcfd.addEventListener("click", function (event) {
    event.stopPropagation();
    openMenu();
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      closeMenu();
    });
  });
});
