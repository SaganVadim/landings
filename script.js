document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector('.accordion-content');
      accordionItem.classList.toggle('active');
      document.querySelectorAll('.accordion-item').forEach(item => {
        const itemContent = item.querySelector('.accordion-content');
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
  

  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; 
                entry.target.style.transform = 'translateY(0)'; 
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
