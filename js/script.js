document.querySelector(".nfrnr").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");

  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
});

function togglebnv(questionNumber) {
  const bnvQuestion = document.querySelector(`[data-w-id="${questionNumber}"]`);
  const bnvQuestionLower = bnvQuestion.querySelector(".bnv-question-lower");

  if (bnvQuestionLower.style.height === "0px") {
    bnvQuestionLower.style.height = "auto";
  } else {
    bnvQuestionLower.style.height = "0px";
  }
}

document.querySelectorAll(".bnv-question").forEach((question) => {
  const questionNumber = question.getAttribute("data-w-id");
  question.addEventListener("click", () => togglebnv(questionNumber));
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionContents.forEach((content) => {
    const accordionUpper = content.querySelector(".accordion-upper");
    const accordionLower = content.querySelector(".accordion-lower");

    accordionUpper.addEventListener("click", function () {
      if (
        accordionLower.style.height === "0px" ||
        accordionLower.style.height === ""
      ) {
        accordionLower.style.height = `${accordionLower.scrollHeight}px`;
      } else {
        accordionLower.style.height = "0px";
      }

      const arrowIcon = accordionUpper.querySelector(".accordion-arrow");
      arrowIcon.classList.toggle("rotate-arrow");
    });
  });
});
