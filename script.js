document.querySelectorAll('.eEGqUFxWqh').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = answer.classList.contains('active');

      
      document.querySelectorAll('.ZiMkWNNepN').forEach((el) => {
        el.classList.remove('active');
      });

      
      if (!isActive) {
        answer.classList.add('active');
      }
    });
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 }); 
  
  document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
  
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && 
      rect.bottom > 0 
    );
  }
  
  function handleScroll() {
    const elements = document.querySelectorAll('.hiddenl');
    elements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('animll'); 
        el.classList.remove('hiddenl'); 
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  

  
  function handleScrollr() {
    const elements = document.querySelectorAll('.hiddenr');
    elements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('animrr'); 
        el.classList.remove('hiddenr'); 
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollr);
  window.addEventListener('load', handleScrollr);