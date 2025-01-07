document.querySelectorAll(".accordion-item").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
  
      
      document.querySelectorAll(".accordion-item.active").forEach((activeItem) => {
        if (activeItem !== item) {
          activeItem.classList.remove("active");
        }
      });
  
     
      item.classList.toggle("active");
    });
  });
  