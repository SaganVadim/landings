document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".spooky.capaciously");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const container = header.closest(".halftone");
        const content = container.querySelector(".tachylites");
  
        const allContents = document.querySelectorAll(".tachylites.active");
        allContents.forEach(openContent => {
          if (openContent !== content) {
            openContent.classList.remove("active");
          }
        });
  
        content.classList.toggle("active");
      });
    });
  });
  