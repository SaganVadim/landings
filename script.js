document.addEventListener('DOMContentLoaded', () => {
  // Craftsmanship Slider
  const craftTrack = document.querySelector('.sliderTrackCraft');
  const craftSlides = document.querySelectorAll('.sliderItemCraft');
  const craftPrev = document.querySelector('.sliderPrevCraft');
  const craftNext = document.querySelector('.sliderNextCraft');
  let craftIndex = 0;

  const updateCraftSlider = () => {
    craftTrack.style.transform = `translateX(-${craftIndex * 100}%)`;
  };

  craftNext.addEventListener('click', () => {
    craftIndex = (craftIndex + 1) % craftSlides.length;
    updateCraftSlider();
  });

  craftPrev.addEventListener('click', () => {
    craftIndex = (craftIndex - 1 + craftSlides.length) % craftSlides.length;
    updateCraftSlider();
  });

  // Customer Stories Slider
  const storyTrack = document.querySelector('.sliderTrackStory');
  const storySlides = document.querySelectorAll('.sliderItemStory');
  const storyPrev = document.querySelector('.sliderPrevStory');
  const storyNext = document.querySelector('.sliderNextStory');
  const storyDots = document.querySelectorAll('.dotStory');
  let storyIndex = 0;

  const updateStorySlider = () => {
    storyTrack.style.transform = `translateX(-${storyIndex * 100}%)`;
    storyDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === storyIndex);
    });
  };

  storyNext.addEventListener('click', () => {
    storyIndex = (storyIndex + 1) % storySlides.length;
    updateStorySlider();
  });

  storyPrev.addEventListener('click', () => {
    storyIndex = (storyIndex - 1 + storySlides.length) % storySlides.length;
    updateStorySlider();
  });

  storyDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      storyIndex = i;
      updateStorySlider();
    });
  });

  // Timeline Animation
  const timelineItems = document.querySelectorAll('.timelineItem');
  const timelineContainer = document.querySelector('.timelineContainer');

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const checkTimelineItems = () => {
    timelineItems.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('visible');
      }
    });
  };

  timelineContainer.addEventListener('scroll', checkTimelineItems);
  window.addEventListener('resize', checkTimelineItems);
  checkTimelineItems();
});


