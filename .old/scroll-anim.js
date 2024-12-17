const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 }); 
  
  document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

//   

document.addEventListener("DOMContentLoaded", () => {
    // Универсальная функция для анимаций
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Добавляем класс "visible"
          observer.unobserve(entry.target); // Отключаем наблюдение для элемента
        }
      });
    }, {
      threshold: 0.2, // 20% элемента должно быть видно
    });
  
    // Ищем все элементы с атрибутом data-anim
    document.querySelectorAll('[data-anim]').forEach(element => {
      element.classList.add('hiddenAnim'); // Скрываем элемент изначально
      observer.observe(element); // Подключаем обсервер к элементу
    });
  });
  