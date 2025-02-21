document.querySelectorAll('.hungrily').forEach((accordion) => {
  const content = accordion.querySelector('.boychiks');
  
  accordion.addEventListener('click', () => {
    document.querySelectorAll('.hungrily').forEach((item) => {
      if (item !== accordion) {
        item.classList.remove('active');
        item.querySelector('.boychiks').style.maxHeight = '0';
      }
    });

    const isActive = accordion.classList.contains('active');
    accordion.classList.toggle('active', !isActive);
    content.style.maxHeight = isActive ? '0' : `${content.scrollHeight}px`;
  });
});

  

 
  

let index = 0;
const slider = document.getElementById('synthesizers'); 
const slides = document.querySelectorAll('.durras'); 
const totalSlides = slides.length;
const dotsContainer = document.getElementById('deodorizes'); 


for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
}

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function prevSlide() {
    showSlide(index - 1);
}

function nextSlide() {
    showSlide(index + 1);
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


updateDots();
setInterval(() => nextSlide(), 5000);
