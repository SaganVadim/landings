document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".VMqzPPaDJU");
    const dots = document.querySelectorAll(".DeOYtVwrsH-dot");
    const prevButton = document.querySelector(".DeOYtVwrsH-arrow-left");
    const nextButton = document.querySelector(".DeOYtVwrsH-arrow-right");
    let currentIndex = 0;
    const slideCount = slides.length;
    const autoSwitchInterval = 4000; 

    function showSlide(index) {
      currentIndex = (index + slideCount) % slideCount;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
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


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
  
    function checkVisibility() {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
       
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        }
      });
    }
  
    
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
  });
  