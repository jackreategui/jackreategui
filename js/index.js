const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const textarea = document.querySelector('textarea')

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');
})

textarea.addEventListener("keyup", e => {
  textarea.style.height = '300px';
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`
})