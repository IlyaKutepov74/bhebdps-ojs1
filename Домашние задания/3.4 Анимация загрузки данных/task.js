const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const currencies = [
  { code: 'USD', value: '74.21' },
  { code: 'EUR', value: '89.57' },
  { code: 'GBP', value: '102.44' },
  { code: 'JPY', value: '0.67' }
];

setTimeout(() => {
  // Скрываем загрузчик
  loader.classList.remove('loader_active');

  // Удаляем пустой элемент-заглушку
  const emptyItem = itemsContainer.querySelector('.item');
  if (emptyItem) {
    emptyItem.remove();
  }

  // Создаём элементы с курсами валют
  currencies.forEach(currency => {
    const item = document.createElement('div');
    item.classList.add('item');

    const codeEl = document.createElement('div');
    codeEl.classList.add('item__code');
    codeEl.textContent = currency.code;

    const valueEl = document.createElement('div');
    valueEl.classList.add('item__value');
    valueEl.textContent = currency.value;

    const currencyEl = document.createElement('div');
    currencyEl.classList.add('item__currency');
    currencyEl.textContent = 'руб.';

    item.appendChild(codeEl);
    item.appendChild(valueEl);
    item.appendChild(currencyEl);
    itemsContainer.appendChild(item);
  });
}, 3000);
