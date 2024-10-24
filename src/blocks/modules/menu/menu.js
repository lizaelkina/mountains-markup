const body = document.querySelector('.root');
const page = document.querySelector('.page');
const menu = page.querySelector('.menu');
const overlay = page.querySelector('.overlay');
const buttonOpenMenu = page.querySelector('.header__burger');
const buttonCloseMenu = menu.querySelector('.menu__close');
const linkMenu = menu.querySelectorAll('.menu__link');

function openMenu() {
  menu.classList.add('menu_opened');
  overlay.classList.add('overlay_opened');
  body.classList.add('root__popup');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  overlay.classList.remove('overlay_opened');
  body.classList.remove('root__popup');
  document.removeEventListener('keydown', closeMenuByEsc);
}

function closeMenuByEsc(event) {
  if(event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}

buttonOpenMenu.addEventListener('click', openMenu);

buttonCloseMenu.addEventListener('click', closeMenu);

menu.addEventListener('mousedown', (event) => {
  if (event.target === menu) {
    closeMenu(menu);
  }
});

linkMenu.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
