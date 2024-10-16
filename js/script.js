document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.HNRKSNxVrK');

    accordionItems.forEach(item => {
        const toggle = item.querySelector('.gPPNejwYiy');
        const content = item.querySelector('.WcZxzwyvKX');

        content.style.maxHeight = '0';

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            accordionItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.WcZxzwyvKX').style.maxHeight = '0';
            });

            if (!isOpen) {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px'; 
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
});
