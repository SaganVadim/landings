document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review");
    let currentReview = 0;
  
    document.querySelector(".next-button").addEventListener("click", function () {
      showReview(currentReview + 1);
    });
  
    document.querySelector(".prev-button").addEventListener("click", function () {
      showReview(currentReview - 1);
    });
  
    function showReview(index) {
      reviews[currentReview].style.display = "none";
      currentReview = (index + reviews.length) % reviews.length;
      reviews[currentReview].style.display = "block";
    }
  
    function autoSlide() {
      showReview(currentReview + 1);
    }
  
    const intervalId = setInterval(autoSlide, 4000);
  
    document.querySelectorAll(".prev-button, .next-button").forEach(function (button) {
      button.addEventListener("click", function () {
        clearInterval(intervalId);
      });
    });
  
    showReview(currentReview);
  });


 
