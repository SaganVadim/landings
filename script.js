const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.3 }); 
  
  document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

  document.addEventListener("DOMContentLoaded", () => {
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2, 
    });

    document.querySelectorAll('[data-anim]').forEach(element => {
        observer.observe(element);
    });
});
