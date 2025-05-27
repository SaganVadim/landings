  document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".uropygia");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const content = this.nextElementSibling;

        if (content && content.classList.contains("dodecaphony")) {
          content.classList.toggle("active");
        }
      });
    });
  });

  document.querySelectorAll('.slider-container').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = track.querySelectorAll('.slide');
    const prevButton = slider.querySelector('.slider-prev');
    const nextButton = slider.querySelector('.slider-next');
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = slides[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
      updateSlider();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
  });

  document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});
