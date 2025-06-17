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

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});
