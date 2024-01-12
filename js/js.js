document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');

    // Disable scrolling when the burger menu is open
    document.body.style.overflow = (document.body.style.overflow === 'hidden') ? 'auto' : 'hidden';
});


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-tab-link');
    const tabContents = document.querySelectorAll('.w-tab-pane');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Убираем класс 'w--current' у текущей активной вкладки
        document.querySelector('.tabs-tab-link.w--current').classList.remove('w--current');
        // Добавляем класс 'w--current' к выбранной вкладке
        tab.classList.add('w--current');
  
        // Скрываем текущий активный контент
        document.querySelector('.w-tab-pane.w--tab-active').classList.remove('w--tab-active');
        // Показываем выбранный контент
        tabContents[index].classList.add('w--tab-active');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('.faqs-accordion');

    faqs.forEach(function (faq) {
        const question = faq.querySelector('.faqs-question');
        const answer = faq.querySelector('.faqs-answer');

        question.addEventListener('click', function () {
            // Скрыть или показать ответ на вопрос
            answer.style.height = answer.clientHeight === 0 ? `${answer.scrollHeight}px` : 0;

            // Переключить активное состояние
            faq.classList.toggle('active');
        });
    });
});