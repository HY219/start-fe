const box = document.querySelector('.box');
const bug = document.querySelector('#bug');
let life = document.querySelector('#life');
let point = document.querySelector('#point');

function handleClickBox(event) {
  if (life.innerHTML === '1') {
    alert('gameover');
  } else {
    life.innerHTML--;
    x = event.clientX;
    y = event.clientX;
    bug.style.top = `${x}px`;
    bug.style.left = `${y}px`;
  }
}

function handleClickBug() {
  console.log('1');
  point.innerHTML++;
  life.innerHTML++;
}
box.addEventListener('click', handleClickBox);
bug.addEventListener('click', handleClickBug);
