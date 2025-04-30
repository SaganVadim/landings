document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".solids");

    items.forEach((item) => {
      item.addEventListener("click", function () {
        if (item.classList.contains("open")) {
          item.classList.remove("open");
        } else {
          items.forEach((el) => el.classList.remove("open"));
          item.classList.add("open");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});
