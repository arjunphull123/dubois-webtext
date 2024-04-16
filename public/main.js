document.addEventListener('DOMContentLoaded', (event) => {
    const runningHead = document.querySelector('.running-head');
    const titleSection = document.querySelector('.title-section');
    const toggleVisibility = () => {
      const titleRect = titleSection.getBoundingClientRect();
      if (titleRect.bottom < 160) {
        runningHead.classList.add('visible');
      } else {
        runningHead.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', toggleVisibility);
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Select all chevron SVG elements
    const chevrons = document.querySelectorAll('.chevron');

    // Function to toggle visibility and rotate chevron
    function toggleSection(event) {
        const chevron = event.currentTarget;
        const subsectionBody = chevron.parentElement.nextElementSibling;
        const subsection = subsectionBody.parentElement

        // Toggle a class for rotating the chevron
        chevron.style.transform = chevron.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

        // Toggle the 'expanded' class for the adjacent section body
        subsectionBody.classList.toggle('expanded');
        subsection.classList.toggle('expanded')
    }

    // Add click event listeners to each chevron
    chevrons.forEach(chevron => {
        chevron.addEventListener('click', toggleSection);
    });

    const tabs = document.querySelectorAll('.tab')

    function activateTab() {
      tabs.forEach(tab => {
        tab.classList.remove('active')
        this.classList.add('active')
      })
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', activateTab)
    })
});
