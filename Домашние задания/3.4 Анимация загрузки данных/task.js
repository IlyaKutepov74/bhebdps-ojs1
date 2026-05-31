(function() {
  'use strict';

  // Создаём контейнер
  var container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.minHeight = '100vh';
  container.style.backgroundColor = '#f0f0f0';
  container.style.fontFamily = 'Arial, sans-serif';

  // Прогресс-бар
  var progressBar = document.createElement('div');
  progressBar.style.width = '300px';
  progressBar.style.height = '20px';
  progressBar.style.background = '#ddd';
  progressBar.style.borderRadius = '10px';
  progressBar.style.overflow = 'hidden';
  progressBar.style.marginBottom = '20px';

  var progressFill = document.createElement('div');
  progressFill.style.width = '0%';
  progressFill.style.height = '100%';
  progressFill.style.background = '#3498db';
  progressFill.style.borderRadius = '10px';
  progressFill.style.transition = 'width 0.3s ease';
  progressBar.appendChild(progressFill);

  // Текст загрузки
  var loaderText = document.createElement('p');
  loaderText.style.fontSize = '18px';
  loaderText.style.color = '#333';
  loaderText.textContent = 'Загрузка данных... 0%';

  container.appendChild(progressBar);
  container.appendChild(loaderText);
  document.body.appendChild(container);

  // Логика анимации
  var progress = 0;
  var interval = setInterval(function() {
    progress += 1;
    progressFill.style.width = progress + '%';
    loaderText.textContent = 'Загрузка данных... ' + progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      loaderText.textContent = 'Данные загружены!';
    }
  }, 40);
})();
