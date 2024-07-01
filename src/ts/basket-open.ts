const basketBtn: HTMLElement | null = document.querySelector('.nav-basket-btn');
const backdrop: HTMLElement | null = document.querySelector('.backdrop');
const basket: HTMLElement | null = document.querySelector('.basket');
const basketCloseBtn: HTMLElement | null =
  document.querySelector('.basket-close-btn');
const basketFooterBtn: NodeListOf<Element> =
  document.querySelectorAll('.basket-footer-btn');

basketBtn?.addEventListener('click', toggleVisibility);
basketCloseBtn?.addEventListener('click', toggleVisibility);
basketFooterBtn.forEach((el) => {
  el?.addEventListener('click', toggleVisibility);
});

function toggleVisibility() {
  if (basket && backdrop) {
    if (basket.classList.contains('closed')) {
      backdrop.style.display = 'block';
      basket.classList.remove('visually-hidden');
      setTimeout(() => {
        basket.classList.remove('closed');
      }, 10);
    } else {
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
