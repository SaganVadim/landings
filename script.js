document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".w-slider-dot");
    const prevButton = document.querySelector(".w-slider-arrow-left");
    const nextButton = document.querySelector(".w-slider-arrow-right");
    let currentIndex = 0;
    const slideCount = slides.length;
    const autoSwitchInterval = 4000; 
  
    function showSlide(index) {
      currentIndex = (index + slideCount) % slideCount;
  
      slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? "block" : "none";
        slide.style.opacity = i === currentIndex ? "1" : "0";
      });
  
      dots.forEach((dot, i) => {
        dot.classList.toggle("w-active", i === currentIndex);
      });
    }
  
    function goToNextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function goToPreviousSlide() {
      showSlide(currentIndex - 1);
    }
  
    function setDotNavigation() {
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          showSlide(i);
          resetAutoSwitch();
        });
      });
    }
  
    let autoSwitch = setInterval(goToNextSlide, autoSwitchInterval);
  
    function resetAutoSwitch() {
      clearInterval(autoSwitch);
      autoSwitch = setInterval(goToNextSlide, autoSwitchInterval);
    }
  
    nextButton.addEventListener("click", () => {
      goToNextSlide();
      resetAutoSwitch();
    });
    prevButton.addEventListener("click", () => {
      goToPreviousSlide();
      resetAutoSwitch();
    });
  
    setDotNavigation();
    showSlide(currentIndex);
  });
  

  
  function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.height && answer.style.height !== '0px';
    
    if (isOpen) {
        answer.style.height = '0px';
    } else {
        answer.style.height = answer.scrollHeight + 'px';
    }
}
