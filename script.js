document.querySelectorAll('.GXFeUYQYMA').forEach((accordion) => {
    accordion.addEventListener('click', function () {
      document.querySelectorAll('.GXFeUYQYMA').forEach((item) => {
        if (item !== this) {
          item.classList.remove('active');
        }
      });
  
      this.classList.toggle('active');
    });
  });
  