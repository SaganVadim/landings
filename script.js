document.querySelectorAll('.iDdKZGGRrV').forEach((accordion) => {
    const header = accordion.querySelector('.CRwnAFaWJh');
    const content = accordion.querySelector('.QhRbwWcUzc');
  
    header.addEventListener('click', () => {
      
      document.querySelectorAll('.iDdKZGGRrV').forEach((item) => {
        if (item !== accordion) {
          item.classList.remove('active');
          item.querySelector('.QhRbwWcUzc').style.maxHeight = '0';
        }
      });
  
      
      const isActive = accordion.classList.contains('active');
      accordion.classList.toggle('active', !isActive);
      content.style.maxHeight = isActive ? '0' : `${content.scrollHeight}px`;
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 }); 
  
    elements.forEach((el) => observer.observe(el));
  });
  