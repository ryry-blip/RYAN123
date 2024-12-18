
  const menuOpenButton = document.getElementById('menu-open-button');
  const menuCloseButton = document.getElementById('menu-close-button');
  const menu = document.querySelector('.navbar .nav-menu');
  const body = document.body;

  menuOpenButton.addEventListener('click', () => {
    menu.classList.add('show-mobile-menu');
    body.classList.add('show-mobile-menu');
  });

  menuCloseButton.addEventListener('click', () => {
    menu.classList.remove('show-mobile-menu');
    body.classList.remove('show-mobile-menu');
  });
