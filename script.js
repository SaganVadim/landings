document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".industrialize");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});



