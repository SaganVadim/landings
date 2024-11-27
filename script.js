document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const onScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          el.classList.add('visible');
        }
      });
    };
  
    onScroll();
  
    window.addEventListener('scroll', onScroll);
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-element-left');

    const handleScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-element-r');

    const handleScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.in-bottom');

    const handleScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.in-forward');

    const handleScroll = () => {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
