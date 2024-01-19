// // Получаем элемент слайдера и его обертку
// var slider = document.querySelector('.cms-slider-collection-list');
// var sliderWrapper = document.querySelector('.cms-slider-collection-list-wrapper');

// // Обработчик события скролла
// window.addEventListener('scroll', function() {
//   // Получаем координаты слайдера относительно видимой области окна
//   var sliderRect = sliderWrapper.getBoundingClientRect();

//   // Проверяем, виден ли слайдер на экране целиком
//   if (
//     sliderRect.top >= 0 &&
//     sliderRect.bottom <= window.innerHeight
//   ) {
//     // Вычисляем прокрутку страницы только если слайдер целиком виден
//     var scrollPosition = window.scrollY || window.pageYOffset;

//     // Изменяем положение слайдера с использованием transform
//     slider.style.transform = 'translateX(' + -scrollPosition + 'px)';
//   }
// });


// Function to toggle FAQ question visibility
function toggleFAQ(questionNumber) {
    const faqQuestion = document.querySelector(`[data-w-id="${questionNumber}"]`);
    const faqQuestionLower = faqQuestion.querySelector('.faq-question-lower');
    
    // Toggle height of faq-question-lower
    if (faqQuestionLower.style.height === '0px') {
      faqQuestionLower.style.height = 'auto';
    } else {
      faqQuestionLower.style.height = '0px';
    }
  }
  
  // Add click event listeners to each FAQ question
  document.querySelectorAll('.faq-question').forEach((question) => {
    const questionNumber = question.getAttribute('data-w-id');
    question.addEventListener('click', () => toggleFAQ(questionNumber));
  });
  
   
  
  document.addEventListener('DOMContentLoaded', function () {
    const accordionContents = document.querySelectorAll('.accordion-content');
  
    accordionContents.forEach((content) => {
      const accordionUpper = content.querySelector('.accordion-upper');
      const accordionLower = content.querySelector('.accordion-lower');
  
      accordionUpper.addEventListener('click', function () {
        // Toggle accordion lower visibility
        if (accordionLower.style.height === '0px' || accordionLower.style.height === '') {
          accordionLower.style.height = `${accordionLower.scrollHeight}px`;
        } else {
          accordionLower.style.height = '0px';
        }
  
        // Toggle accordion arrow rotation
        const arrowIcon = accordionUpper.querySelector('.accordion-arrow');
        arrowIcon.classList.toggle('rotate-arrow');
      });
    });
  });
  






// "a-16": {
//     id: "a-16",
//     title: "CMS Slider Scrolling Slide",
//     continuousParameterGroups: [
//       {
//         id: "a-16-p",
//         type: "SCROLL_PROGRESS",
//         parameterLabel: "Scroll",
//         continuousActionGroups: [
//           {
//             keyframe: 30,
//             actionItems: [
//               {
//                 id: "a-16-n",
//                 actionTypeId: "TRANSFORM_MOVE",
//                 config: {
//                   delay: 0,
//                   easing: "",
//                   duration: 500,
//                   target: {
//                     useEventTarget: "CHILDREN",
//                     selector: ".cms-slider-collection-list",
//                     selectorGuids: ["9fff4d62-d457-fd1b-f5d4-b48e11e9c57e"],
//                   },
//                   xValue: 0,
//                   xUnit: "vh",
//                   yUnit: "PX",
//                   zUnit: "PX",
//                 },
//               },
//             ],
//           },
//           {
//             keyframe: 70,
//             actionItems: [
//               {
//                 id: "a-16-n-2",
//                 actionTypeId: "TRANSFORM_MOVE",
//                 config: {
//                   delay: 0,
//                   easing: "",
//                   duration: 500,
//                   target: {
//                     useEventTarget: "CHILDREN",
//                     selector: ".cms-slider-collection-list",
//                     selectorGuids: ["9fff4d62-d457-fd1b-f5d4-b48e11e9c57e"],
//                   },
//                   xValue: -300,
//                   xUnit: "vh",
//                   yUnit: "PX",
//                   zUnit: "PX",
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     ],
//     createdOn: 1695307969147,
//   }