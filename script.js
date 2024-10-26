document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');

    document
      .querySelectorAll('.accordion-item')
      .forEach(item => item.classList.remove('active'));

    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});

const createPixel = container => {
  if (container) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.left = `${Math.random() * 100}%`;
    pixel.style.backgroundColor = getRandomColor();
    pixel.style.animationDuration = `${Math.random() * 3 + 3}s`;
    container.appendChild(pixel);
    setTimeout(() => pixel.remove(), 5000);
  }
};

const getRandomColor = () => {
  const colors = [
    '#ff57332e',
    '#33c9ff2e',
    '#00ff002e',
    '#ff33f62e',
    '#faff332e',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const container = document.querySelector('.MFoyeiIrsN');
setInterval(() => createPixel(container), 100);
const hosDdwQHFCContainer = document.querySelector('.HosDdwQHFC');
setInterval(() => createPixel(hosDdwQHFCContainer), 100);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0;
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  const headers = document.querySelectorAll(
    '.MSioBHrRAj, .UIsskwIyOw, .IKcwcRZoyS, .PGjjXmQGAa, .pGogHOFzNK, .yEEgNWAAnR, .MmXWPahTsL, .acxKcLmgyU'
  );

  headers.forEach(header => {
    header.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(0, 53, 59), rgb(5, 81, 90))`;
  });
});
