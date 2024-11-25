document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".ZwNbEPzfmO");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const accordionItem = header.closest(".snpAwvtWns");
        const content = accordionItem.querySelector("nav");
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          document.querySelectorAll(".snpAwvtWns nav").forEach(nav => {
            nav.style.maxHeight = null;
          });
  
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
  

  const targetClasses = ['wyAZqchQEp', 'hzQsHPyDGu', 'ZZFFKoGlyT.pebWXhtsmG']; // 
const initialBackground = `
  linear-gradient(
    174deg,
    var(--blue-gray),
    rgba(255, 255, 255, 0) 50%
  )`;

document.addEventListener('mousemove', (e) => {
  
  targetClasses.forEach((className) => {
    const blocks = document.querySelectorAll(`.${className}`);

    blocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const isMouseInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isMouseInside) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        block.style.backgroundImage = `
          ${initialBackground},
          radial-gradient(circle at ${x}px ${y}px, rgba(0, 51, 102, 0.8), rgba(0, 25, 51, 0.8))
        `;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animate'); // Находим все элементы с классом
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Добавляем класс, если элемент в области видимости
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el)); // Наблюдаем за каждым элементом
  });
  