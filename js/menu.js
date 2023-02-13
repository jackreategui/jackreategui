const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const mainContainer = document.querySelector('.main_container');
const navItem = document.querySelector('.nav_item');
let menuAbierto = document.querySelector('.nav_overlay--show');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');

  cerrarMenu();
});

navOverlay.addEventListener('click', event => {
  if (navOverlay.contains(event.target)) {
    hamburgerIcon.classList.toggle('nav_hamburger--open');

    navOverlay.classList.toggle('nav_overlay--show');
  }
});

// Cierre del menu

function cerrarMenu() {
  window.addEventListener('scroll', () => {
    if (navOverlay.classList.contains("nav_overlay--show")) {
      closeMenu();
    };
  });
  
  function closeMenu() {
    hamburgerIcon.classList.remove('nav_hamburger--open');
  
    navOverlay.classList.remove('nav_overlay--show');
  };
};
