

function toggleMenu() {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('show-menu');
}

document.querySelectorAll('.header-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.header-menu');
        if (menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
        }
    });
});