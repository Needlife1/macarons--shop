import { backdrop, positionContainer, body } from './basket-open';

const contacts = document.querySelector('.contacts');
const closeContactsBtn = document.getElementById('contacts-close-btn');
const openContactsBtn = document.querySelectorAll('#open-contacts');

openContactsBtn.forEach((el) => {
  el.addEventListener('click', toggleVisibilityContacts);
});

if (closeContactsBtn) {
  closeContactsBtn.addEventListener('click', toggleVisibilityContacts);
}

function toggleVisibilityContacts() {
  if (contacts && backdrop && positionContainer && body) {
    if (contacts.classList.contains('closed')) {
      backdrop!.style.display = 'block';
      body.style.overflow = 'hidden';
      positionContainer.style.pointerEvents = 'all';
      contacts.classList.remove('visually-hidden');

      setTimeout(() => {
        contacts.classList.remove('closed');
      }, 10);
    } else {
      body.style.overflow = 'auto';
      positionContainer.style.pointerEvents = 'none';
      contacts.classList.add('closed');

      setTimeout(() => {
        contacts.classList.add('visually-hidden');
      }, 500);

      setTimeout(() => {
        backdrop!.style.display = 'none';
      }, 500);
    }
  }
}
