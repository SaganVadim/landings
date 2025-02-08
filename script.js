


const accordionItems = document.querySelectorAll('.diffusenesses');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.marc');
    
    content.classList.toggle('open');
    
    document.querySelectorAll('.marc').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.classList.remove('open');
      }
    });
  });
});