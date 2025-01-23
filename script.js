const slider = document.querySelector('.tabulator');

if (slider) { 
  const slides = slider.querySelectorAll('.formalness');
  const prevArrow = slider.querySelector('.redigest-arrow-lef');
  const nextArrow = slider.querySelector('.neoplasias-arrow-right');
  const dots = slider.querySelectorAll('.wheat');

  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, idx) => {
      slide.setAttribute('aria-hidden', idx !== currentSlide);
      slide.style.display = idx === currentSlide ? 'block' : 'none';
    });

    dots.forEach((dot, idx) => {
      dot.setAttribute('aria-pressed', idx === currentSlide);
      dot.classList.toggle('bright', idx === currentSlide);
    });
  }

  if (prevArrow) {
    prevArrow.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }

  if (dots.length > 0) {
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
      });
    });
  }

  showSlide(currentSlide);
}



function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const isOpen = answer.style.height && answer.style.height !== '0px';
  
  if (isOpen) {
      answer.style.height = '0px';
  } else {
      answer.style.height = answer.scrollHeight + 'px';
  }
}