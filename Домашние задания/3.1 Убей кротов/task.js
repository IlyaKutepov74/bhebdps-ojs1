(() => {
  //  Счётчики игры 
  let dead = 0;   
  let lost = 0;   

  //  Вспомогательная функция: получить лунку по номеру (1..9) 
  const getHole = (index) => document.getElementById(`hole${index}`);

  //  Обработчик клика по лунке 
  const onHoleClick = (event) => {
    if (dead >= 10 || lost >= 5) {
      return;
    }

    const hole = event.currentTarget;

    if (hole.classList.contains('hole_has-mole')) {
      dead++;
      document.getElementById('dead').textContent = dead;
    } else {
      lost++;
      document.getElementById('lost').textContent = lost;
    }

    if (dead === 10) {
      alert('Вы победили!');
      resetGame();
    }

    if (lost === 5) {
      alert('Вы проиграли!');
      resetGame();
    }
  };

  // Сброс статистики 
  const resetGame = () => {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = '0';
    document.getElementById('lost').textContent = '0';
  };

  // Регистрация обработчиков на всех 9 лунках 
  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', onHoleClick);
  }
})();
