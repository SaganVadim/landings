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

      const targetPanelId = link.getAttribute("data-hui");
      
      tabPanels.forEach(function(panel) {
        panel.style.display = 'none';
        if (panel.getAttribute("data-hui") === targetPanelId) {
          panel.style.display = 'block';
        }
      });
    });
  });
});
