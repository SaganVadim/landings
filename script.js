document.addEventListener('DOMContentLoaded', () => {
  // Testimonials Slider
  const testimonialsWrapper = document.querySelector('.testimonials-slider .slider-wrapper');
  const testimonialsItems = document.querySelectorAll('.testimonials-slider .slider-item');
  const testimonialsPrev = document.querySelector('.testimonials-slider .slider-prev');
  const testimonialsNext = document.querySelector('.testimonials-slider .slider-next');

  if (testimonialsWrapper && testimonialsItems.length > 0 && testimonialsPrev && testimonialsNext) {
      let testimonialsSlide = 0;

      function updateTestimonialsSlider() {
          testimonialsItems.forEach((item, index) => {
              item.classList.toggle('active', index === testimonialsSlide);
          });
          const slideWidth = testimonialsItems[0].offsetWidth;
          testimonialsWrapper.style.transform = `translateX(-${testimonialsSlide * slideWidth}px)`;
      }

      testimonialsNext.addEventListener('click', () => {
          testimonialsSlide = (testimonialsSlide + 1) % testimonialsItems.length;
          updateTestimonialsSlider();
      });

      testimonialsPrev.addEventListener('click', () => {
          testimonialsSlide = (testimonialsSlide - 1 + testimonialsItems.length) % testimonialsItems.length;
          updateTestimonialsSlider();
      });

      testimonialsItems[testimonialsSlide].classList.add('active');
      window.addEventListener('resize', updateTestimonialsSlider);
  } else {
      console.warn('Testimonials slider elements not found.');
  }

  // Industry Slider
  const industryWrapper = document.querySelector('.industry-slider .slider-wrapper');
  const industryItems = document.querySelectorAll('.industry-slider .slider-item');
  const industryPrev = document.querySelector('.industry-slider .slider-prev');
  const industryNext = document.querySelector('.industry-slider .slider-next');

  if (industryWrapper && industryItems.length > 0 && industryPrev && industryNext) {
      let industrySlide = 0;

      function updateIndustrySlider() {
          industryItems.forEach((item, index) => {
              item.classList.toggle('active', index === industrySlide);
          });
          const slideWidth = industryItems[0].offsetWidth;
          industryWrapper.style.transform = `translateX(-${industrySlide * slideWidth}px)`;
      }

      industryNext.addEventListener('click', () => {
          industrySlide = (industrySlide + 1) % industryItems.length;
          updateIndustrySlider();
      });

      industryPrev.addEventListener('click', () => {
          industrySlide = (industrySlide - 1 + industryItems.length) % industryItems.length;
          updateIndustrySlider();
      });

      industryItems[industrySlide].classList.add('active');
      window.addEventListener('resize', updateIndustrySlider);
  } else {
      console.warn('Industry slider elements not found.');
  }

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');

  if (faqQuestions.length > 0) {
      faqQuestions.forEach(question => {
          question.addEventListener('click', () => {
              const answer = question.nextElementSibling;
              if (answer) {
                  const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
                  answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
              }
          });
      });
  } else {
      console.warn('FAQ elements not found.');
  }
});

document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});
