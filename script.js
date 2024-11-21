const accordionHeaders = document.querySelectorAll('.RJEFyxuxNf');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling; 

    content.classList.toggle('open');
    
    document.querySelectorAll('.OZOjxlCzPt').forEach(item => {
      if (item !== content) {
        item.classList.remove('open');
      }
    });
  });
});
