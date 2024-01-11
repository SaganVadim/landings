

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
  