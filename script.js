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
// 

  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  
  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate-visible'); 
      } else {
        element.classList.remove('animate-visible'); 
      }
    });
  }

  
  window.addEventListener('scroll', handleScrollAnimation);

  
  window.addEventListener('load', handleScrollAnimation);

  