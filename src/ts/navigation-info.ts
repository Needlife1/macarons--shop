import { openNav } from './open-nav-info';

const infoBtns: NodeListOf<HTMLElement> =
  document.querySelectorAll('.info-btn');
const section: NodeListOf<HTMLElement> =
  document.querySelectorAll('.info-section');
const breadcrumbsText: HTMLElement | null =
  document.querySelector('.breadcrumbs-text');

let activeSection: string = 'about';

infoBtns.forEach((el) => {
  el.addEventListener('click', changeArticle);
});

function changeArticle(e: Event) {
  const target = e.target as HTMLElement;

  if (!target || activeSection === target.id) return;

  section.forEach((el) => {
    if (!el.classList.contains('visually-hidden')) {
      el.classList.add('visually-hidden');
    }

    if (el.id === target.id) {
      el.classList.remove('visually-hidden');

      infoBtns.forEach((el) => el.classList.remove('selected'));
      target.classList.add('selected');

      const dataName: string | undefined = el.dataset.name;

      if (dataName !== undefined) {
        breadcrumbsText!.textContent = dataName;
      }
    }

    if (window.matchMedia('(max-width:767.9px)').matches) openNav();
  });

  activeSection = target.id;
}
