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