document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.pimp');

    accordionItems.forEach(item => {
        const toggle = item.querySelector('.chilblains');
        const content = item.querySelector('.perichondria');

        content.style.maxHeight = '0';

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            accordionItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.perichondria').style.maxHeight = '0';
            });

            if (!isOpen) {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px'; 
            }
        });
    });
});






