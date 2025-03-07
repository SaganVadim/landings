document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".misspoke.germplasms");

  items.forEach((item) => {
    const content = item.querySelector(".nonbeing.rainmakers");

    content.style.maxHeight = "0px";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.3s ease-in-out";

    item.addEventListener("click", function () {
      if (content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
        item.classList.remove("active");
      } else {
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherContent = otherItem.querySelector(".nonbeing.rainmakers");
            otherContent.style.maxHeight = "0px";
            otherItem.classList.remove("active");
          }
        });

        content.style.maxHeight = content.scrollHeight + "px";
        item.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".gallery-slider");
  
  if (!slider) return;

  const sliderContainer = slider.querySelector(".slider-container");
  const sliderItems = slider.querySelectorAll(".slider-item");
  const prevBtn = slider.querySelector(".slider-prev");
  const nextBtn = slider.querySelector(".slider-next");

  let currentIndex = 0;
  const totalItems = sliderItems.length;
  let itemWidth = sliderItems[0].offsetWidth + 20;

  function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateSlider();
  });

  prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
      updateSlider();
  });

  window.addEventListener("resize", function () {
      itemWidth = sliderItems[0].offsetWidth + 20;
      updateSlider();
  });
});

  