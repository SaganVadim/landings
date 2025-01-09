const navItems = document.querySelectorAll('.FYvACxuYNf');

navItems.forEach(item => {
  item.previousElementSibling.querySelector('h5').addEventListener('click', function() {
    const nav = item;
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.classList.add('closed');
    } else {
      document.querySelectorAll('.FYvACxuYNf').forEach(nav => {
        nav.classList.remove('open');
        nav.classList.add('closed');
      });

      nav.classList.remove('closed');
      nav.classList.add('open');
    }
  });
});
