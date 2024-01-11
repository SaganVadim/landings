document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".rghsss");
  const fdghedLinks = document.querySelector(".fdghed-links");

  burgerMenu.addEventListener("click", function () {
    fdghedLinks.classList.toggle("show");
  });

  fdghedLinks.addEventListener("click", function () {
    fdghedLinks.classList.remove("show");
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
