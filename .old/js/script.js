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
  const xbvContents = document.querySelectorAll(".xbv-content");

  xbvContents.forEach((content) => {
    const xbvUpper = content.querySelector(".xbv-upper");
    const xbvLower = content.querySelector(".xbv-lower");

    xbvUpper.addEventListener("click", function () {
      if (xbvLower.style.height === "0px" || xbvLower.style.height === "") {
        xbvLower.style.height = `${xbvLower.scrollHeight}px`;
      } else {
        xbvLower.style.height = "0px";
      }

      const arrowIcon = xbvUpper.querySelector(".xbv-arrow");
      arrowIcon.classList.toggle("rotate-arrow");
    });
  });
});
