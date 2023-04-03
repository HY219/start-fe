console.log('05');

const wrap = document.getElementById('wrap');
console.log(wrap);
const item = document.querySelector('#wrap > .item');
console.log(item);

const elements = document.querySelectorAll('div');
console.log(elements);

const div = document.createElement('div');
div.style.border = '1px solic red';
div.innerHTML = '<div>abac</div>';

document.body.innerText = '';
document.body.appendChild(div);

// window.addEventListener('load', ()=>{
//     console.log('window load event');
// })
window.addEventListener('click', () => {
  console.log('window load event1');
});
window.addEventListener('click', () => {
  console.log('window load event2');
});
