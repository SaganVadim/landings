document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');

    if (!sliderWrapper || slides.length === 0 || !prevButton || !nextButton) {
        return; 
    }

    let currentIndex = 0;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
});


  function animateNumbers() {
    const counters = document.querySelectorAll('.predicts');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let count = 0;
        const speed = Math.floor(target / 100); 
        
        function updateCount() {
            if (count < target) {
                count += speed; 
                if (count > target) count = target; 
                counter.textContent = `'${count.toString().slice(-2)}`; 
                requestAnimationFrame(updateCount);
            }
        }
        
        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', animateNumbers);

document.querySelectorAll('.isthmus').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.isthmus').forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.classList.remove('active');
            }
        });

        this.classList.toggle('active');
    });
});