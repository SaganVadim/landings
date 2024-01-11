document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rwgsegawToggles = document.querySelectorAll(".rwgsegaw-toggle");

  rwgsegawToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const rwgsegawContent = this.nextElementSibling;
      if (
        rwgsegawContent.style.height &&
        rwgsegawContent.style.height !== "0px"
      ) {
        rwgsegawContent.style.height = "0px";
      } else {
        rwgsegawContent.style.height = `${rwgsegawContent.scrollHeight}px`;
      }
    });
  });
});
