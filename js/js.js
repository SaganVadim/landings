document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");

  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs-tab-link");
  const tabContents = document.querySelectorAll(".yrds");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(".tabs-tab-link.sgvfdb")
        .classList.remove("sgvfdb");
      tab.classList.add("sgvfdb");

      document.querySelector(".yrds.sgtrhsedg").classList.remove("sgtrhsedg");
      tabContents[index].classList.add("sgtrhsedg");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faqs-accordion");

  faqs.forEach(function (faq) {
    const question = faq.querySelector(".faqs-question");
    const answer = faq.querySelector(".faqs-answer");

    question.addEventListener("click", function () {
      answer.style.height =
        answer.clientHeight === 0 ? `${answer.scrollHeight}px` : 0;

      faq.classList.toggle("active");
    });
  });
});
