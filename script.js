function toggleAccordion(element) {
    const parentDiv = element.closest('.zwnVTYZmMV');
    const content = parentDiv.querySelector('.cfKllmoCfz');
    
   
    if (parentDiv.classList.contains('active')) {
      parentDiv.classList.remove('active');
      content.style.height = '0'; 
    } else {
      
      document.querySelectorAll('.zwnVTYZmMV').forEach((item) => {
        const itemContent = item.querySelector('.cfKllmoCfz');
        item.classList.remove('active');
        itemContent.style.height = '0'; // 
      });

      
      parentDiv.classList.add('active');
      content.style.height = content.scrollHeight + 'px'; 
    }
  }