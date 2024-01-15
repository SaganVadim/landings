document.addEventListener('DOMContentLoaded', function() {
    // Находим слайдер
    var slider = document.querySelector('.services-slider');
  
    // Устанавливаем интервал для автоматического переключения слайдов через 2 секунды
    var intervalId = setInterval(function() {
      // Имитируем нажатие на кнопку следующего слайда
      var nextButton = document.querySelector('.right-arrow');
      nextButton.click();
    }, 2000);
  
    // Останавливаем автоматическое переключение при наведении на слайдер
    slider.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
  
    // Возобновляем автоматическое переключение при уходе с слайдера
    slider.addEventListener('mouseleave', function() {
      intervalId = setInterval(function() {
        var nextButton = document.querySelector('.right-arrow');
        nextButton.click();
      }, 2000);
    });
  });