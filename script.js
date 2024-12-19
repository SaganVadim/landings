// Находим все заголовки аккордеона
const accordionHeaders = document.querySelectorAll('.nKyYfHAULe');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll('.tBvnHhaouu').forEach(item => {
        item.style.maxHeight = null;
      });

      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
