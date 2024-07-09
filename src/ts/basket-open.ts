const basketBtn: NodeListOf<Element> =
  document.querySelectorAll('.nav-basket-btn');
export const backdrop: HTMLElement | null = document.querySelector('.backdrop');
const basket: HTMLElement | null = document.querySelector('.basket');
const basketCloseBtn: HTMLElement | null =
  document.querySelector('.basket-close-btn');
const basketFooterBtn: NodeListOf<Element> =
  document.querySelectorAll('.basket-footer-btn');
export const positionContainer: HTMLElement | null = document.querySelector(
  '.position-container',
);
export const body: HTMLElement | null = document.querySelector('body');

basketBtn.forEach((el) => {
  el?.addEventListener('click', toggleVisibilityBasket);
});
basketCloseBtn?.addEventListener('click', toggleVisibilityBasket);
basketFooterBtn.forEach((el) => {
  el?.addEventListener('click', toggleVisibilityBasket);
});

function toggleVisibilityBasket() {
  if (basket && backdrop && positionContainer && body) {
    if (basket.classList.contains('closed')) {
      backdrop.style.display = 'block';
      body.style.overflow = 'hidden';
      positionContainer.style.pointerEvents = 'all';
      basket.classList.remove('visually-hidden');
      setTimeout(() => {
        basket.classList.remove('closed');
      }, 10);
    } else {
      body.style.overflow = 'auto';
      positionContainer.style.pointerEvents = 'none';
      basket.classList.add('closed');
      setTimeout(() => {
        basket.classList.add('visually-hidden');
      }, 500);
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 500);
    }
  }
}
