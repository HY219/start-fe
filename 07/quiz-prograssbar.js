const progress = document.querySelector('#progress');
let percent = 0;
console.log(percent);

function plusGragh() {
  progress.style.width = `${percent}%`;
  percent += 1;
  setTimeout(function () {
    clearInterval(plus);
  }, 5050);
  console.log(percent);
}

function plus() {
  //   setInterval(plusGragh, 50, minusGragh);
  //   setTimeout(function () {
  //     clearInterval(plus);
  //   }, 5050);

  console.log(percent);
}

function minusGragh() {
  progress.style.width = `${percent}%`;
  percent -= 1;
  //   if (percent === 0) {
  //     plus();
  //   }

  console.log(percent);
}

function minus() {
  //   setTimeout(function () {
  //   while (percent < 10) {
  setInterval(minusGragh, 50, plusGragh);
  //   }
  //   }, 50);

  console.log(percent);
}

// let empty = true;
// if (empty) {
//   clearInterval(plus);
//   empty = false;
// } else {
// plus();
//   empty = true;
// }

if (percent === 0) {
  plus();
  // clearInterval(plusGragh, 5050);
}

// setTimeout(function () {
//   clearInterval(plus);
// }, 5050);
// function minus() {
//   // setTimeout(function () {
//   setInterval(minusGragh, 50);
//   // }, 5050);
// }
