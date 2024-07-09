const infoMobBtn: HTMLElement | null = document.querySelector('.info-mob-btn');
export const infoNav: HTMLElement | null = document.querySelector('.info-nav');
const infoCloseBtn: HTMLElement | null =
  document.querySelector('.info-close-btn');

function checkScreenSize() {
  if (window.matchMedia('(max-width:767.9px)').matches) {
    infoNav?.classList.add('visually-hidden');
    infoCloseBtn?.classList.add('visually-hidden');
    infoMobBtn?.classList.remove('visually-hidden');
  } else {
    infoNav?.classList.remove('visually-hidden');
  }
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);

infoMobBtn?.addEventListener('click', openNav);
infoCloseBtn?.addEventListener('click', openNav);

export function openNav() {
  if (!infoMobBtn && !infoNav) return;

  if (infoNav?.classList.contains('visually-hidden')) {
    infoNav?.classList.remove('visually-hidden');
    infoMobBtn?.classList.add('visually-hidden');
    infoCloseBtn?.classList.remove('visually-hidden');
  } else {
    infoNav?.classList.add('visually-hidden');
    infoMobBtn?.classList.remove('visually-hidden');
    infoCloseBtn?.classList.add('visually-hidden');
  }
}
