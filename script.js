const teacarts = document.querySelectorAll('.teacarts');

  teacarts.forEach(teacart => {
    teacart.addEventListener('click', () => {
      const tallowing = teacart.nextElementSibling;

      if (tallowing) {
        document.querySelectorAll('.tallowing.open').forEach(activeItem => {
          if (activeItem !== tallowing) {
            activeItem.classList.remove('open');
          }
        });

        tallowing.classList.toggle('open');
      }
    });
  });