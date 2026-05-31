(function() {
  'use strict';

  // Стили 
  var style = document.createElement('style');
  style.textContent =
    '.tooltip-wrapper { position: relative; display: inline-block; margin: 60px; font-family: Arial, sans-serif; }' +
    '.tooltip-trigger { cursor: pointer; border-bottom: 1px dashed #333; padding: 4px 2px; color: #0059b3; }' +
    '.tooltip { position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%); background: #333; color: #fff; padding: 8px 14px; border-radius: 6px; font-size: 14px; white-space: nowrap; opacity: 0; visibility: hidden; transition: opacity 0.25s, visibility 0.25s; pointer-events: none; }' +
    '.tooltip::after { content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 6px solid transparent; border-top-color: #333; }' +
    '.tooltip-wrapper:hover .tooltip { opacity: 1; visibility: visible; }' +
    '.tooltip-wrapper.right-edge .tooltip { left: auto; right: 0; transform: translateX(0); }' +
    '.tooltip-wrapper.right-edge .tooltip::after { left: auto; right: 20px; }';
  document.head.appendChild(style);

  // Контейнер для центрирования 
  var wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';
  wrapper.style.height = '100vh';

  // Сам компонент подсказки 
  var tooltipWrapper = document.createElement('div');
  tooltipWrapper.className = 'tooltip-wrapper';
  tooltipWrapper.id = 'tooltipDemo';

  var trigger = document.createElement('span');
  trigger.className = 'tooltip-trigger';
  trigger.textContent = 'Наведи на меня';

  var tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = 'Это всплывающая подсказка';

  tooltipWrapper.appendChild(trigger);
  tooltipWrapper.appendChild(tooltip);
  wrapper.appendChild(tooltipWrapper);
  document.body.appendChild(wrapper);

  // Адаптация позиции при нехватке места 
  function checkEdge() {
    var rect = tooltipWrapper.getBoundingClientRect();
    var tooltipWidth = 180; 
    if (rect.left + tooltipWidth > window.innerWidth) {
      tooltipWrapper.classList.add('right-edge');
    } else {
      tooltipWrapper.classList.remove('right-edge');
    }
  }

  window.addEventListener('resize', checkEdge);
  checkEdge();
})();
