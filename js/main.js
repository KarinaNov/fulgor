// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger?.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});
