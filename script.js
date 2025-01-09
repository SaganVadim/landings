
  document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".OemhTGPIlG");

    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling; 

        document.querySelectorAll(".LPivbKGLjG").forEach((item) => {
          if (item !== content) {
            item.classList.remove("active");
            item.style.maxHeight = null;
          }
        });

        if (content.classList.contains("active")) {
          content.classList.remove("active");
          content.style.maxHeight = null;
        } else {
          content.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });

