
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".alimenting");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;

      document.querySelectorAll(".reconstructs").forEach((item) => {
        if (item !== answer) {
          item.style.maxHeight = null;
        }
      });

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});