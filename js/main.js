const submit = document.querySelector('#form');

window.onscroll = function () {
    let position = window.pageYOffset || document.documentElement.scrollTop;

    const fotoHero = document.querySelector('.hero--foto');

    fotoHero.style.bottom = position * 0.1 + 'px';
}

document.getElementById('contacto_boton').addEventListener('click', function() {
    fbq('track', 'Contact');
}, false);

document.getElementById('nav_link_Contactar').addEventListener('click', function() {
    fbq('track', 'Contact');
}, false);