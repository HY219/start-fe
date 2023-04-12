const $board = document.getElementById('div');
const WHITE_COLOR = 'white';
const BLACK_COLOR = 'black';

function createBoard() {
  //   const $board = document.createElement('div');
  //   $board.className = 'white';

  const div = `<div class="${color}"></div>`;
  return div;
}

function createRow(count = 4, startColor = WHITE_COLOR) {
  let row = '';
  for (let i = 0; i < count; i++) {
    let color = '';
    if (i % 2 === 0) {
      color = startColor === WHITE_COLOR ? BLACK_COLOR : WHITE_COLOR;
    }
    row += createBoard(startColor);
  }
  return row;
}

function createChessBoard(count = 4) {
  let board = '';
  for (let i = 0; i < count; i++) {
    const startColor = i % 2 === 0 ? WHITE_COLOR : BLACK_COLOR;
    board += createRow(4, startColor);
  }
  //   board += createRow('white');
  //   board += createRow('black');
  //   board += createRow('white');
  //   board += createRow('black');

  return board;
}

let $preTarget = '';

$board.addEventListener('click', newFunction());

$board.innerHTML = createChessBoard();
function newFunction(event) {
  // return event => {
  console.log(event.target);
  const $target = event.target;
  // $target.className += ' red';
  if ($target === $preTarget) return;
  $target.classList.add('red');

  //아래 코드와 같은 코드
  //   if ($preTarget) {
  //     $preTarget.classList.remove('red');
  //   }
  $preTarget && $preTarget.classList.remove('red');
  $preTarget = $target;
}
