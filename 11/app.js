import modal from './modal.js';

const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
  modal().createModal();
});
