const burger = document.querySelector(".hamburger-icon");
const kgjijkfmdkMenu = document.querySelector(".kgjijkfmdk-menu-wrapper");
const mobMenu = document.querySelector(".tehwr");
const mobMenuDell = document.querySelector(".kgjijkfmdk-menu-mob");

burger.addEventListener("click", () => {
  kgjijkfmdkMenu.classList.toggle("hide");
  mobMenu.classList.toggle("hide");
});

mobMenu.addEventListener("click", () => {
  mobMenu.classList.add("hide");
});

function removeClassOnWidth600() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 991) {
    kgjijkfmdkMenu.classList.remove("hide");
    mobMenuDell.classList.add("hide");
  }
}

window.addEventListener("load", removeClassOnWidth600);
window.addEventListener("resize", removeClassOnWidth600);
