document.querySelectorAll('.wpOhnrjdAj').forEach((item) => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.huCFKqfCLx');
  
      
      if (content.classList.contains('show-content')) {
        content.classList.remove('show-content');
        content.classList.add('hid-content');
      } else {
        document.querySelectorAll('.huCFKqfCLx').forEach((el) => {
          el.classList.remove('show-content');
          el.classList.add('hid-content');
        });
        content.classList.add('show-content');
        content.classList.remove('hid-content');
      }
    });
  });
  

  
function revealOnScroll() {
    const elements = document.querySelectorAll(".fade-in");
    
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      
      if (elementTop < viewportHeight - 100) { 
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  