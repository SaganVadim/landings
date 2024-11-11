
document.addEventListener('mousemove', e => {
    const brightness = (e.clientY / window.screen.availHeight) * 20 + 60; 
    
    const blocks = document.querySelectorAll('.kaWiUYnWiE, .HYmXSGezjV');
  
    
    blocks.forEach(block => {
      block.style.background = `linear-gradient(180deg, hsl(171, 22%, ${brightness}%), hsl(171, 22%, ${brightness - 25}%))`;
    });
  });
  

const scrollElements = document.querySelectorAll('.hidden');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
