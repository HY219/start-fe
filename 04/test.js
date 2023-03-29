/** 백틱, 백슬라이스 */
const title = 'jeju';
const url =
  'https://daum.net/ \
asd \
asd ' + title;
const url2 = `https://daum.net/${title}
asdf
as
asdf
as`;

console.log(url, url2);

/** function */
function sum(x, y) {
  // if(!y) y = 0;
  return x + y;
}

console.log(sum(10));

/** map */
const result = [1, 2, 3].map(function (item) {
  return item + 1;
});
console.log(result);

const result2 = [1, 2, 3].map(item => {
  return item + 1;
});
console.log(result2);

const result3 = [1, 2, 3].map(item => item + 1);
console.log(result3);

/** 전개 구문 */
const items = [1, 2, 3, 4];
console.log(...items);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const [x, y, z] = [...numbers];
console.log(sum(...[x, y, z]));

//배열 복사
const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

/** Rest 파라미터 */
function func(...param) {
  console.log(param);
}

func(1, 2, 3); //[1, 2, 3] //이렇게도 배열을 갖는다

/** 구조분해 할당 */
const obj = { team: 1, area: 2 };

//이전에는 이렇게만 가져올 수 있었다.
const team1 = obj.team;
const area1 = obj.area;

//다음과 방식으로도 가져올 수 있다.
const { team2, area2 } = obj;

/** 향상된 객체 리터럴 */
const number = 1234;

const student = {
  //number: number,
  number,
  //playGame:function(){}
  playGame() {
    console.log('play');
  },
};
