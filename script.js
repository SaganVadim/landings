function toggleAccordion(element) {
    const answerDiv = element.querySelector('.rimshots');

   
    if (answerDiv.classList.contains('open')) {
        answerDiv.classList.remove('open'); 
    } else {
        
        const allAnswers = document.querySelectorAll('.rimshots');
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





