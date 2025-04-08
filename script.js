document.querySelectorAll('.devolved.siphons').forEach(item => {
  item.addEventListener('click', () => {
    const mastic = item.querySelector('.mastic');
    if (mastic) mastic.classList.toggle('open');
  });
});

const gameSlider = document.querySelector('.game-slider .slider-container');
const gameSlides = document.querySelectorAll('.game-slider .slider-item');
const gamePrev = document.querySelector('.game-slider .slider-prev');
const gameNext = document.querySelector('.game-slider .slider-next');

if (gameSlider && gameSlides.length > 0 && gamePrev && gameNext) {
  let gameIndex = 0;
  const updateGameSlider = () => {
    gameSlider.style.transform = `translateX(-${gameIndex * 100}%)`;
  };

  gameNext.addEventListener('click', () => {
    gameIndex = (gameIndex + 1) % gameSlides.length;
    updateGameSlider();
  });

  gamePrev.addEventListener('click', () => {
    gameIndex = (gameIndex - 1 + gameSlides.length) % gameSlides.length;
    updateGameSlider();
  });

  let gameTouchStartX = 0;
  gameSlider.addEventListener('touchstart', (e) => {
    gameTouchStartX = e.touches[0].clientX;
  });
  gameSlider.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (gameTouchStartX - touchEndX > 50) {
      gameIndex = (gameIndex + 1) % gameSlides.length;
    } else if (touchEndX - gameTouchStartX > 50) {
      gameIndex = (gameIndex - 1 + gameSlides.length) % gameSlides.length;
    }
    updateGameSlider();
  });
}

const tipsSlider = document.querySelector('.tips-slider .slider-container');
const tipsSlides = document.querySelectorAll('.tips-slider .slider-item');
const tipsPrev = document.querySelector('.tips-slider .slider-prev');
const tipsNext = document.querySelector('.tips-slider .slider-next');

if (tipsSlider && tipsSlides.length > 0 && tipsPrev && tipsNext) {
  let tipsIndex = 0;
  const updateTipsSlider = () => {
    tipsSlider.style.transform = `translateX(-${tipsIndex * 100}%)`;
  };

  tipsNext.addEventListener('click', () => {
    tipsIndex = (tipsIndex + 1) % tipsSlides.length;
    updateTipsSlider();
  });

  tipsPrev.addEventListener('click', () => {
    tipsIndex = (tipsIndex - 1 + tipsSlides.length) % tipsSlides.length;
    updateTipsSlider();
  });

  let tipsTouchStartX = 0;
  tipsSlider.addEventListener('touchstart', (e) => {
    tipsTouchStartX = e.touches[0].clientX;
  });
  tipsSlider.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (tipsTouchStartX - touchEndX > 50) {
      tipsIndex = (tipsIndex + 1) % tipsSlides.length;
    } else if (touchEndX - tipsTouchStartX > 50) {
      tipsIndex = (tipsIndex - 1 + tipsSlides.length) % tipsSlides.length;
    }
    updateTipsSlider();
  });
}

const reviewCarousel = document.querySelector('.review-carousel .carousel-container');
const reviewItems = document.querySelectorAll('.review-carousel .carousel-item');
const reviewPrev = document.querySelector('.review-carousel .carousel-prev');
const reviewNext = document.querySelector('.review-carousel .carousel-next');

if (reviewCarousel && reviewItems.length > 0 && reviewPrev && reviewNext) {
  let reviewIndex = 0;
  const updateReviewCarousel = () => {
    reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
  };

  reviewNext.addEventListener('click', () => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    updateReviewCarousel();
  });

  reviewPrev.addEventListener('click', () => {
    reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length;
    updateReviewCarousel();
  });

  let reviewTouchStartX = 0;
  reviewCarousel.addEventListener('touchstart', (e) => {
    reviewTouchStartX = e.touches[0].clientX;
  });
  reviewCarousel.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (reviewTouchStartX - touchEndX > 50) {
      reviewIndex = (reviewIndex + 1) % reviewItems.length;
    } else if (touchEndX - reviewTouchStartX > 50) {
      reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length;
    }
    updateReviewCarousel();
  });

  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    updateReviewCarousel();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
