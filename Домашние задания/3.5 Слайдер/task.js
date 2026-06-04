const items = Array.from(document.querySelectorAll('.slider__item'));
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
const dotsContainer = document.querySelector('.slider__dots');

let activeIndex = items.findIndex(item =>
  item.classList.contains('slider__item_active')
);
if (activeIndex === -1) activeIndex = 0;

// Создаём точки, если контейнер существует (можно раскомментировать в HTML)
if (dotsContainer) {
  items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider__dot');
    if (index === activeIndex) {
      dot.classList.add('slider__dot_active');
    }
    dot.addEventListener('click', () => {
      setActive(index);
    });
    dotsContainer.appendChild(dot);
  });
}

function setActive(index) {
  items[activeIndex].classList.remove('slider__item_active');
  activeIndex = (index + items.length) % items.length;
  items[activeIndex].classList.add('slider__item_active');

  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.slider__dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('slider__dot_active', i === activeIndex);
    });
  }
}

prevArrow.addEventListener('click', () => {
  setActive(activeIndex - 1);
});

nextArrow.addEventListener('click', () => {
  setActive(activeIndex + 1);
});
