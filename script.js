function toggleAccordion(element) {
    const answerDiv = element.querySelector('.JNnXdbqDLg');

   
    if (answerDiv.classList.contains('open')) {
        answerDiv.classList.remove('open'); 
    } else {
        
        const allAnswers = document.querySelectorAll('.JNnXdbqDLg');
        allAnswers.forEach(answer => {
            answer.classList.remove('open'); 
        });
        answerDiv.classList.add('open'); 
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const h1Element = document.querySelector('.atUDpQBCRn');

window.addEventListener('scroll', function () {
    if (isInViewport(h1Element)) {
        h1Element.classList.add('scrolled');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const paragraphElements = document.querySelectorAll('.bqOIKmLmbp');

window.addEventListener('scroll', function () {
    paragraphElements.forEach((p) => {
        if (isInViewport(p)) {
            p.classList.add('scrolled');
        }
    });
});
