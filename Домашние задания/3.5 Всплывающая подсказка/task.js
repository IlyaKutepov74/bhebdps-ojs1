const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeTooltip = null;
let currentTooltipElement = null;

// Создаём один элемент подсказки и переиспользуем его
const tooltipElem = document.createElement('div');
tooltipElem.classList.add('tooltip');
document.body.appendChild(tooltipElem);

function showTooltip(element) {
  const text = element.getAttribute('title');
  if (!text) return;

  // Предотвращаем показ стандартного title
  element.removeAttribute('title');
  element.dataset.tooltipText = text;

  tooltipElem.textContent = text;
  tooltipElem.classList.add('tooltip_active');

  const rect = element.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tooltipElem.offsetWidth / 2;
  let top = rect.top - tooltipElem.offsetHeight - 5;

  // Проверка границ
  if (left < 0) left = 0;
  if (left + tooltipElem.offsetWidth > window.innerWidth) {
    left = window.innerWidth - tooltipElem.offsetWidth;
  }
  if (top < 0) {
    top = rect.bottom + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  activeTooltip = element;
}

function hideTooltip() {
  if (activeTooltip) {
    // Возвращаем title обратно
    activeTooltip.setAttribute('title', activeTooltip.dataset.tooltipText);
    delete activeTooltip.dataset.tooltipText;
    activeTooltip = null;
  }
  tooltipElem.classList.remove('tooltip_active');
}

tooltips.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (activeTooltip === link) {
      hideTooltip();
    } else {
      if (activeTooltip) hideTooltip();
      showTooltip(link);
    }
  });
});

// Скрываем подсказку при клике вне ссылок
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('has-tooltip')) {
    hideTooltip();
  }
});

// Корректируем позицию при ресайзе
window.addEventListener('resize', () => {
  if (activeTooltip) {
    showTooltip(activeTooltip);
  }
});
