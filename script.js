function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);
  
    if (section.style.height && section.style.height !== '0px') {
      section.style.height = '0'; 
    } else {
      
      var allSections = document.querySelectorAll('.TlsEgCaySg');
      allSections.forEach(function (sec) {
        sec.style.height = '0'; 
      });
  
      
      section.style.height = section.scrollHeight + 'px'; 
    }
  }
  