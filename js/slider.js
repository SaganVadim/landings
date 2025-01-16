document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.milium'); // All slides
    const nextButton = document.querySelector('.bedlamp'); // Next button
    const prevButton = document.querySelector('.ghostliest'); // Previous button
    const pagination = document.querySelector('.pantalet'); // Pagination
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        if (pagination) {
            pagination.textContent = `Slide ${index + 1} / ${slides.length}`;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
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
