const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentSlide = 0;

if (sliderWrapper && sliderItems.length > 0 && prevButton && nextButton) {
  function updateSlider() {
    sliderItems.forEach((item, index) => {
      item.classList.toggle('active', index === currentSlide);
    });
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

  sliderItems[currentSlide].classList.add('active');
  window.addEventListener('resize', updateSlider);
}

const galleryTrigger = document.querySelector('.gallery-trigger');
const galleryContainer = document.querySelector('.gallery-container');
const galleryClose = document.querySelector('.gallery-close');

if (galleryTrigger && galleryContainer && galleryClose) {
  galleryTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    galleryContainer.classList.add('active');
  });

  galleryClose.addEventListener('click', () => {
    galleryContainer.classList.remove('active');
  });

  galleryContainer.addEventListener('click', (e) => {
    if (e.target === galleryContainer) {
      galleryContainer.classList.remove('active');
    }
  });
} else {
  console.warn('Some gallery elements are missing from the DOM.');
}


const tipHeaders = document.querySelectorAll('.ripply.perseverates');

if (tipHeaders.length > 0) {
  tipHeaders.forEach(header => {
    const content = header.nextElementSibling;
    if (content) {
      header.addEventListener('click', () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        content.style.maxHeight = isOpen ? '0px' : `${content.scrollHeight}px`;
      });
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
