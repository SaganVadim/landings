document.querySelectorAll('.derated').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');

    document
      .querySelectorAll('.sponges')
      .forEach(item => item.classList.remove('active'));

    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

if (slider && slides.length > 0 && prevButton && nextButton && dots.length > 0) {
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.slide);
            updateSlider();
        });
    });

    updateSlider();
}

