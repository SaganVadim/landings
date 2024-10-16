const toggler = document.querySelector(".header-toggler");
const menu = document.querySelector(".header-menu");
const menuItems = document.querySelectorAll(".header-menu__item");
const html = document.querySelector("html");

toggler.addEventListener("click", () => {
  menu.classList.toggle("header-menu--open");
  toggler.classList.toggle("header-toggler--open");
  html.classList.toggle("unscroll"); 
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menu.classList.remove("header-menu--open");
    toggler.classList.remove("header-toggler--open");
    html.classList.remove("unscroll"); 
  });
});

