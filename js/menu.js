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
  
    // Set an interval for automatic sliding (adjust the time as needed)
    const intervalId = setInterval(autoSlide, 4000);
  
    // Stop automatic sliding when user interacts with the buttons
    document.querySelectorAll(".prev-button, .next-button").forEach(function (button) {
      button.addEventListener("click", function () {
        clearInterval(intervalId);
      });
    });
  
    // Show the initial review (optional)
    showReview(currentReview);
  });