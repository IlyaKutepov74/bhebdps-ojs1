document.addEventListener('DOMContentLoaded', () => {

  const updateRotatorStyles = (rotator, activeCase) => {
    if (!activeCase.dataset.color) {
      rotator.style.color = '';
      return;
    }
    rotator.style.color = activeCase.dataset.color;
  };

  const startRotator = (rotator) => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

    if (cases.length < 2) {
      return;
    }

    let activeIndex = 0; 

    const interval = parseInt(rotator.dataset.speed, 10) || 1000;

    setInterval(() => {
      cases[activeIndex].classList.remove('rotator__case_active');

      activeIndex = (activeIndex + 1) % cases.length;

      const nextCase = cases[activeIndex];
      nextCase.classList.add('rotator__case_active');

      updateRotatorStyles(rotator, nextCase);
    }, interval);
  };

  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(startRotator);
});
