const basket: HTMLElement | null = document.querySelector('.nav-basket-btn');
const backdrop: HTMLElement | null = document.querySelector('.backdrop');
const basketCloseBtn: HTMLElement | null =
  document.querySelector('.basket-close-btn');
const basketFooterBtn: NodeListOf<Element> =
  document.querySelectorAll('.basket-footer-btn');

basket?.addEventListener('click', toggleVisibility);
basketCloseBtn?.addEventListener('click', toggleVisibility);
basketFooterBtn.forEach((el) => {
  el?.addEventListener('click', toggleVisibility);
});

function toggleVisibility() {
  if (backdrop) {
    if (backdrop.classList.contains('closed')) {
      backdrop.classList.remove('visually-hidden');
      setTimeout(() => {
        backdrop.classList.remove('closed');
      }, 10);
    } else {
      backdrop.classList.add('closed');
      setTimeout(() => {
        backdrop.classList.add('visually-hidden');
      }, 500);
    }
  }
}
