
const carouselWrapper = document.querySelector('.testimonials-carousel .carousel-wrapper');
const carouselItems = document.querySelectorAll('.testimonials-carousel .carousel-item');
const carouselPrev = document.querySelector('.testimonials-carousel .carousel-prev');
const carouselNext = document.querySelector('.testimonials-carousel .carousel-next');
let carouselSlide = 0;

if (carouselWrapper && carouselItems.length && carouselPrev && carouselNext) {
  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.classList.toggle('active', index === carouselSlide);
    });
    const slideWidth = carouselItems[0].offsetWidth;
    carouselWrapper.style.transform = `translateX(-${carouselSlide * slideWidth}px)`;
  }

  carouselNext.addEventListener('click', () => {
    carouselSlide = (carouselSlide + 1) % carouselItems.length;
    updateCarousel();
  });

  carouselPrev.addEventListener('click', () => {
    carouselSlide = (carouselSlide - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  carouselItems[carouselSlide].classList.add('active');
  window.addEventListener('resize', updateCarousel);
}


const seasonalWrapper = document.querySelector('.seasonal-slider .slider-wrapper');
const seasonalItems = document.querySelectorAll('.seasonal-slider .slider-item');
const seasonalPrev = document.querySelector('.seasonal-slider .slider-prev');
const seasonalNext = document.querySelector('.seasonal-slider .slider-next');
let seasonalSlide = 0;

if (seasonalWrapper && seasonalItems.length && seasonalPrev && seasonalNext) {
  function updateSeasonalSlider() {
    seasonalItems.forEach((item, index) => {
      item.classList.toggle('active', index === seasonalSlide);
    });
    const slideWidth = seasonalItems[0].offsetWidth;
    seasonalWrapper.style.transform = `translateX(-${seasonalSlide * slideWidth}px)`;
  }

  seasonalNext.addEventListener('click', () => {
    seasonalSlide = (seasonalSlide + 1) % seasonalItems.length;
    updateSeasonalSlider();
  });

  seasonalPrev.addEventListener('click', () => {
    seasonalSlide = (seasonalSlide - 1 + seasonalItems.length) % seasonalItems.length;
    updateSeasonalSlider();
  });

  seasonalItems[seasonalSlide].classList.add('active');
  window.addEventListener('resize', updateSeasonalSlider);
}


const faqQuestions = document.querySelectorAll('.faq-question');
if (faqQuestions.length) {
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer) {
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
        answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
