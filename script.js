
  document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.chaulmoogras.relative');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = content.classList.contains('active');

        document.querySelectorAll('.nasties.vesicates.active').forEach(activeContent => {
          activeContent.classList.remove('active');
          activeContent.style.maxHeight = '0';
        });

        if (!isActive) {
          content.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });

