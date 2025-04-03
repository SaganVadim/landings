document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".HzhHUufKbP");
  
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.closest(".HzhHUufKbP").querySelector(".NrdWopSneF");
  
        document.querySelectorAll(".NrdWopSneF.active").forEach((openContent) => {
          if (openContent !== content) {
            openContent.classList.remove("active");
          }
        });
  
        
        content.classList.toggle("active");
      });
    });
  });
  