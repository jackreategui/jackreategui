const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const mainContainer = document.querySelector('.main_container');
const navItem = document.querySelector('.nav_item');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');
});

navOverlay.addEventListener('click', event => {
  if (navOverlay.contains(event.target)) {
    hamburgerIcon.classList.toggle('nav_hamburger--open');

    navOverlay.classList.toggle('nav_overlay--show');
  }
});