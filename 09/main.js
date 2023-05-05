/*
const count = document.querySelector('.count');
// const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

let number = 0;
// Number(count.innerHTML);

// plus.addEventListener('click', () => (number += 1));
console.log(number);

// plus.onclick = () => {
//   number += 1;
// };

function plus() {
  number += 1;
}
*/

const $root = document.querySelector('#root');

function createButton({ text = '', onClick }) {
  const $btn = document.createElement('button');
  //  $btn.textContent = 'plus';
  $btn.textContent = text;
  $btn.addEventListener('click', () => {});
  return $btn;
}

function createCountWrapper({ count = 0, className = '' }) {
  const setCount = count => {
    $count.textContent = count;
  };

  const $count = document.createElement('div');
  $count.classList.add(className);
  $count.textContent = count;

  return { $count, setCount }; //return을 두개 해줄 때는 다음과 같이 Object로
}

let count = 0;
function plus() {
  console.log('plus');
  //++count;
  document.querySelector('.count').textContent = ++count;
}

function minus() {
  console.log('minus');
  //--count;
  document.querySelector('.count').textContent = --count;
}

$plusButton = createButton({ text: 'plus', onClick: plus });
$minusButton = createButton({ text: 'minus', onClick: minus });
// $createCountWrapper = createButton({ count: 0, className: 'count' });
const { $count, setCount } = createButton({ count: 0, className: 'count' });

$root.append($plusButton, $minusButton); //append에서는 여러개의 dom element를 받을 수 있다.
