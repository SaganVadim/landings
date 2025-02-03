document.querySelectorAll('.postaccident').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.closest('.fascicularly');
      
      parent.classList.toggle('active');
    });
  });