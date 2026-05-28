// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger?.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

//  Video play button
const videoWrapper = document.querySelector('.video__wrapper');
const videoPlayer  = document.querySelector('.video__player');
const videoPlayBtn = document.querySelector('.video__play');

videoPlayBtn?.addEventListener('click', () => {
  videoWrapper.classList.add('is-playing');
  videoPlayer.setAttribute('controls', '');

  const playPromise = videoPlayer.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      videoWrapper.classList.remove('is-playing');
      videoPlayer.removeAttribute('controls');
    });
  }
});

videoPlayer?.addEventListener('pause', () => {
  videoWrapper.classList.remove('is-playing');
});

videoPlayer?.addEventListener('ended', () => {
  videoWrapper.classList.remove('is-playing');
  videoPlayer.removeAttribute('controls');
});
