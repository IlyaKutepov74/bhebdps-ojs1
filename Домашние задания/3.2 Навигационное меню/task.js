document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu__link');

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const parentLi = link.closest('.menu__item');

      const subMenu = parentLi.querySelector('.menu_sub');

      if (subMenu) {
        event.preventDefault();

        // Повышенный уровень: закрываем все остальные открытые подменю 
        const currentMenu = link.closest('.menu');

        const activeSubMenus = currentMenu.querySelectorAll('.menu_active');

        activeSubMenus.forEach((menu) => {
          if (menu !== subMenu) {
            menu.classList.remove('menu_active');
          }
        });

        subMenu.classList.toggle('menu_active');
      }
    });
  });
});
