function toggleAccordion(element) {
    const parentDiv = element.closest('.recitalist');
    const content = parentDiv.querySelector('.repressive');
    
   
    if (parentDiv.classList.contains('active')) {
      parentDiv.classList.remove('active');
      content.style.height = '0'; 
    } else {
      
      document.querySelectorAll('.recitalist').forEach((item) => {
        const itemContent = item.querySelector('.repressive');
        item.classList.remove('active');
        itemContent.style.height = '0'; // 
      });

      
      parentDiv.classList.add('active');
      content.style.height = content.scrollHeight + 'px'; 
    }
  }