function toggleAccordion(section) {
    const nav = section.querySelector(".nonparity.discretenesses");
    const allNavs = document.querySelectorAll(".nonparity.discretenesses");
  
    allNavs.forEach((el) => {
      if (el !== nav) el.classList.remove("open");
    });
  
    nav.classList.toggle("open");
  }
  