document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.KsZbgDykJN');
    const nextButton = document.querySelector('.iKIiiLaEnM');
    const prevButton = document.querySelector('.RABnstjoPP');
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.zIndex = i === index ? '1' : '0';
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }


    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide(); 
        startAutoSlide(); 
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    
    showSlide(currentIndex);
    startAutoSlide(); 
});