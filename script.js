document.querySelectorAll('.outdrove').forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector('.moos');
      accordionItem.classList.toggle('active');
      document.querySelectorAll('.neurotropic').forEach(item => {
        const itemContent = item.querySelector('.moos');
        if (item !== accordionItem) {
          item.classList.remove('active');
          itemContent.style.maxHeight = null;
        }
      });
      if (accordionItem.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
  

  
