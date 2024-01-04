const burger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu-wrapper");
const mobMenu = document.querySelector(".mob-menu");
const mobMenuDell = document.querySelector(".nav-menu-mob");


burger.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  mobMenu.classList.toggle("hide");
});

mobMenu.addEventListener("click", () => {
  mobMenu.classList.add("hide");
});

function removeClassOnWidth600() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 991) {
    navMenu.classList.remove("hide");
    mobMenuDell.classList.add("hide");
  }
}

window.addEventListener("load", removeClassOnWidth600);
window.addEventListener("resize", removeClassOnWidth600);
