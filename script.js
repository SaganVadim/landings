document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".jSciahepKR");
  
    faqItems.forEach(item => {
      const header = item.querySelector(".tGyOqshWgU"); 
      const content = item.querySelector(".KvxzLxKDMG"); 
  
      header.addEventListener("click", function() {
        content.classList.toggle("open");
  
        header.classList.toggle("active");
  
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector(".KvxzLxKDMG").classList.remove("open");
            otherItem.querySelector(".tGyOqshWgU").classList.remove("active");
          }
        });
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
  
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (rect.top < windowHeight - 100) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    
    handleScroll();
  });
  