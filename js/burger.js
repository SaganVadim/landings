document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".menu-button");
  var navMenuWrapper = document.querySelector(".ujdgefj");

  menuButton.addEventListener("click", function () {
    navMenuWrapper.classList.toggle("show");
  });
});
