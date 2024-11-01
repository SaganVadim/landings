document.querySelectorAll('.nKXnnEtnHa').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        
        document.querySelectorAll('.accordion-content.open').forEach(openContent => {
            if (openContent !== content) {
                openContent.classList.remove('open');
            }
        });

        content.classList.toggle('open');
    });
});




