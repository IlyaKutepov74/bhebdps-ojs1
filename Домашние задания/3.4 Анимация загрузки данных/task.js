<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Анимация загрузки данных</title>
  <style>
    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
    .progress-bar {
      width: 300px;
      height: 20px;
      background: #ddd;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .progress-fill {
      width: 0%;
      height: 100%;
      background: #3498db;
      border-radius: 10px;
      transition: width 0.3s ease;
    }
    .loader-text {
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="loader-container">
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill"></div>
    </div>
    <p class="loader-text" id="loaderText">Загрузка данных... 0%</p>
  </div>
  <script>
    (function() {
      const progressFill = document.getElementById('progressFill');
      const loaderText = document.getElementById('loaderText');
      let progress = 0;
      const interval = setInterval(function() {
        progress += 1;
        progressFill.style.width = progress + '%';
        loaderText.textContent = 'Загрузка данных... ' + progress + '%';
        if (progress >= 100) {
          clearInterval(interval);
          loaderText.textContent = 'Данные загружены!';
        }
      }, 40);
    })();
  </script>
</body>
</html>
