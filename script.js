const images = document.querySelectorAll('.xviyJUnCOy');

images.forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    const { width, height, top, left } = image.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / height) * 40;
    const rotateY = (x / width) * -40;
    const scale = 1;

    image.style.transform = `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
});
