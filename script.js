document.querySelectorAll('.RezTTVTKMa').forEach((header) => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling; 
      if (content.classList.contains('active')) {
        content.classList.remove('active'); // 
      } else {
        
        document.querySelectorAll('.CVtcEXuXls.active').forEach((openContent) => {
          openContent.classList.remove('active');
        });
        content.classList.add('active'); 
      }
    });
  });
  

  