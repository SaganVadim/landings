document.querySelectorAll('.vituperations').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.scuppernong');
        
        document.querySelectorAll('.scuppernong.open').forEach(openContent => {
            if (openContent !== content) {
                openContent.classList.remove('open');
            }
        });

        content.classList.toggle('open');
    });
});




