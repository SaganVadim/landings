// const burger = document.querySelector(".hamburger-icon");
// const kgjijkfmdkMenu = document.querySelector(".kgjijkfmdk-menu-wrapper");
// const mobMenu = document.querySelector(".tehwr");
// const mobMenuDell = document.querySelector(".kgjijkfmdk-menu-mob");

// burger.addEventListener("click", () => {
//   kgjijkfmdkMenu.classList.toggle("hide");
//   mobMenu.classList.toggle("hide");
// });

// mobMenu.addEventListener("click", () => {
//   mobMenu.classList.add("hide");
// });

// function removeClassOnWidth600() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth > 991) {
//     kgjijkfmdkMenu.classList.remove("hide");
//     mobMenuDell.classList.add("hide");
//   }
// }

// window.addEventListener("load", removeClassOnWidth600);
// window.addEventListener("resize", removeClassOnWidth600);

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  
    navLinks.addEventListener('click', function () {
      navLinks.classList.remove('show');
    });
  });



document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function() {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.height && dropdownContent.style.height !== "0px") {
          dropdownContent.style.height = "0px";
        } else {
          dropdownContent.style.height = `${dropdownContent.scrollHeight}px`;
        }
      });
    });
  });
  