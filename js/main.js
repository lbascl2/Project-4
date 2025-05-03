// JS scripts placed here

const menuToggle = document.querySelector('.hamburger');
const menu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('expanded');
  menuToggle.classList.toggle('is-active'); // Animation toggle
});



$('.carousel').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


