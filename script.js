
const partySlider = document.querySelector('.party-slider .slider-container');
const partySlides = document.querySelectorAll('.party-slider .slider-item');
const partyPrev = document.querySelector('.party-slider .slider-prev');
const partyNext = document.querySelector('.party-slider .slider-next');
let partyIndex = 0;

if (partySlider && partySlides.length > 0 && partyPrev && partyNext) {
  partyNext.addEventListener('click', () => {
    partyIndex = (partyIndex + 1) % partySlides.length;
    partySlider.style.transform = `translateX(-${partyIndex * 100}%)`;
  });

  partyPrev.addEventListener('click', () => {
    partyIndex = (partyIndex - 1 + partySlides.length) % partySlides.length;
    partySlider.style.transform = `translateX(-${partyIndex * 100}%)`;
  });
}

const tipsSlider = document.querySelector('.tips-slider .slider-container');
const tipsSlides = document.querySelectorAll('.tips-slider .slider-item');
const tipsPrev = document.querySelector('.tips-slider .slider-prev');
const tipsNext = document.querySelector('.tips-slider .slider-next');
let tipsIndex = 0;

if (tipsSlider && tipsSlides.length > 0 && tipsPrev && tipsNext) {
  tipsNext.addEventListener('click', () => {
    tipsIndex = (tipsIndex + 1) % tipsSlides.length;
    tipsSlider.style.transform = `translateX(-${tipsIndex * 100}%)`;
  });

  tipsPrev.addEventListener('click', () => {
    tipsIndex = (tipsIndex - 1 + tipsSlides.length) % tipsSlides.length;
    tipsSlider.style.transform = `translateX(-${tipsIndex * 100}%)`;
  });
}

const reviewCarousel = document.querySelector('.review-carousel .carousel-container');
const reviewItems = document.querySelectorAll('.review-carousel .carousel-item');
const reviewPrev = document.querySelector('.review-carousel .carousel-prev');
const reviewNext = document.querySelector('.review-carousel .carousel-next');
let reviewIndex = 0;

if (reviewCarousel && reviewItems.length > 0 && reviewPrev && reviewNext) {
  reviewNext.addEventListener('click', () => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
  });

  reviewPrev.addEventListener('click', () => {
    reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length;
    reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
  });

  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
  }, 5000);
}

const accordionItems = document.querySelectorAll('.sawed.dermatological');

if (accordionItems.length > 0) {
  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      let content = item.querySelector('.isolation');

      if (content) {
        if (content.style.height && content.style.height !== '0px') {
          content.style.height = '0px'; 
        } else {
          document.querySelectorAll('.isolation').forEach((el) => el.style.height = '0px');
          content.style.height = content.scrollHeight + 'px'; 
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
