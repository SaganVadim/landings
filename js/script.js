document.querySelector(".nfrnr").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
  
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  });


document.addEventListener('DOMContentLoaded', function () {
    var questionElements = document.querySelectorAll('.faq-question');

    questionElements.forEach(function (question) {
      question.addEventListener('click', toggleAnswer);
    });

    function toggleAnswer(event) {
      var parentElement = event.currentTarget.closest('.faq-item');

      var answerElement = parentElement.querySelector('.faq-answer');

      if (answerElement.style.height === '0px' || answerElement.style.height === '') {
        answerElement.style.height = answerElement.scrollHeight + 'px';
      } else {
        answerElement.style.height = '0px';
      }
    }
  });