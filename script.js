document.querySelectorAll(".dogmatists").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    if (content.classList.contains("active")) {
      content.classList.remove("active");
    } else {
      document.querySelectorAll(".lankiness.active").forEach((openContent) => {
        openContent.classList.remove("active");
      });
      content.classList.add("active");
    }
  });
});

let index = 0;
const slides = document.querySelector(".raillery");
const totalSlides = document.querySelectorAll(".metrics").length;

document.getElementById("boyar").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlide();
});

document.getElementById("humanization").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlide();
}, 5000);
