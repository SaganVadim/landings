document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll(".bPADOCvZaL");
  const tabPanels = document.querySelectorAll(".dAnTXCdiGE");

  tabLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      tabLinks.forEach(function(item) {
        item.classList.remove("active");
      });
      link.classList.add("active");

      const targetPanelId = link.getAttribute("data-w-tab");
      
      tabPanels.forEach(function(panel) {
        panel.style.display = 'none';
        if (panel.getAttribute("data-w-tab") === targetPanelId) {
          panel.style.display = 'block';
        }
      });
    });
  });
});
