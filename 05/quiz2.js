var $board = document.getElementById('board');
var str = '';
var className = '';
var isWhite = false;
var selectedDom = null;
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if (isWhite) {
      className = 'white';
    } else {
      className = 'black';
    }
    str += '<div class="' + className + '"></div>';
    isWhite = !isWhite;
  }
  isWhite = !isWhite;
}

$board.innerHTML = str;

var $items = document.querySelectorAll('#board > div');

function selectBoard(event) {
  console.log('selected');
  var events = event.currentTarget;

  if (selectedDom) {
    selectedDom.className = selectedDom.className.replace(' select', '');
  }

  events.className += ' select';
  selectedDom = events;
}

for (var i = 0; i < $items.length; i++) {
  $items[i].addEventListener('click', selectBoard);
}
