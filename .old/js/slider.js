document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelector(".slider-wrapper");
  let currentSlide = 0;
  const intervalTime = 3000;

  function updateSlider() {
    const newTransformValue = -currentSlide * 100 + "%";
    slides.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide =
      (currentSlide - 1 + slides.children.length) % slides.children.length;
    updateSlider();
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, intervalTime);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonials");
  const slides = document.querySelector(".testimonials-cont");
  let currentSlide = 0;
  const intervalTime = 5000;

  function updateSlider() {
    const newTransformValue = -currentSlide * 100 + "%";
    slides.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide =
      (currentSlide - 1 + slides.children.length) % slides.children.length;
    updateSlider();
  }

  document
    .querySelector(".testimonials-next")
    .addEventListener("click", nextSlide);
  document
    .querySelector(".testimonials-prev")
    .addEventListener("click", prevSlide);

  setInterval(nextSlide, intervalTime);
});
