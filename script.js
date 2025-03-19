
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

if (sliderWrapper && sliderItems.length > 0 && prevButton && nextButton) {
  let currentSlide = 0;

  function updateSlider() {
    const slideWidth = sliderItems[0].offsetWidth;
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    updateSlider();
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
}

const galleryTrigger = document.querySelector('.gallery-trigger');
const galleryContainer = document.querySelector('.gallery-container');
const galleryClose = document.querySelector('.gallery-close');

if (galleryTrigger && galleryContainer && galleryClose) {
  galleryTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    galleryContainer.style.display = 'flex';
  });

  galleryClose.addEventListener('click', () => {
    galleryContainer.style.display = 'none';
  });

  galleryContainer.addEventListener('click', (e) => {
    if (e.target === galleryContainer) {
      galleryContainer.style.display = 'none';
    }
  });
}
