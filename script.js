document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nourishes").forEach((item) => {
    item.addEventListener("click", function () {
      const content = this.querySelector(".teleologic");

      const isActive = content.style.maxHeight;

      document.querySelectorAll(".teleologic").forEach((el) => {
        el.style.maxHeight = null;
      });

      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
