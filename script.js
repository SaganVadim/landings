const createBubble = (containerClass) => {
    
    const bubbleContainer = document.querySelector(containerClass);
    
    if (!bubbleContainer) return; 
    
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
   
    const size = Math.random() * 20 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
  
    bubbleContainer.appendChild(bubble);
  
    setTimeout(() => {
      bubble.remove();
    }, 6000);
};
  

setInterval(() => createBubble('.cikAaOkXWr.zDHREbnpWa'), 150);  
setInterval(() => createBubble('.cLGHmzFMGy.zDHREbnpWa'), 200);             

