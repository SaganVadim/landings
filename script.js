document.querySelectorAll('.resplendent').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');

      document.querySelectorAll('.refractometry.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      if (!isOpen) {
        content.classList.add('open');
      }
    });
  });