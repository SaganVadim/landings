const headerBurger = document.querySelector(".header_burger");
const headerListMenu = document.querySelector(".menu_list");
if (headerBurger) {
  headerBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerListMenu.classList.toggle("_active");
  });
}
