var $result = document.querySelector('#result');
var btn = document.querySelector('#btn');

function a() {
  var i = document.querySelector('#num').value;
  if (!isNaN(i)) {
    $result.innerHTML = '';
    for (j = 1; j <= 9; j++) {
      $result.innerHTML += `${i} x ${j} = ${i * j}<br>`;
    }
  } else {
    alert('숫자를 입력해주세요');
  }
}

function handleClcik() {
  a();
}
btn.addEventListener('click', handleClcik);
