/** quiz1.문자열 합치기 */
const year = 2022;
const month = 11;
const day = 3;
// console.log(day.padStart(1, '0'));
// const dateString1 = `${year}-${month + 1}-${day.padStart(2, '0')}`;
// console.log(dateString1); //2022-12-03

/** quiz2.문자열 분리 */
const dateString2 = '2022-12-12';
console.log(dateString2.split('-')); //[2022,12,12]; //Number을 사용해서 문자->숫자로 바꿔주기

/** quiz3.문자열 변경 */
const text3 = '나는 XX를 좋아해';
const item3 = 'JS';
console.log(text3.replace('XX', item3)); //나는 JS를 좋아해

/** quiz4.문자열 검색 */
const text4 = '안녕하세요. 나는 사람입니다.';
const searchText4 = '사람';
console.log(text4.includes(searchText4)); // ture
//includes는 IE에서 지원하지 않는다.
//-> 이런경우 includes가 동작하는 코드를 직접 작성해주어야 한다.

/** quiz5.모든 배열값 더하기 */
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];
let result5 = 0;
//point3이 생길수도 있을 때 대응
//373 (모든 배열값들의 합)
const newarray5 = [...point1, ...point2];
for (i = 0; i < newarray5.length; i++) {
  result5 += newarray5[i];
}
console.log(result5);
//newarray5.map((item) => (result += item))

/** quiz6.소수점이하를 버리고 정수 구하기 */
const a = 1.2;
const b = 3.4;
const result6 = Math.floor(a) + Math.floor(b);
console.log(result6); //4

/** quiz7.랜덤수 구하기 */
const min = 1;
const max = 10;
const result7 = Math.floor(Math.random() * max) + min;
console.log(result7); //(1~10을 포함한)랜덤수

/** quiz8.배수 확인 */
const target = 10;
const num = 3;
//target이 num의 배수인지
//false
if (target % 3 == 0) {
  console.log(true);
} else {
  console.log(false);
}
//console.log(target % 3 == 0) //false

/** quiz9.대문자로 변경 */
const nick = 'kakao';
const result9 = nick.toUpperCase();
console.log(result9);
//KAKAO

/** quiz10. 원시타입 요소만 배열로 만들기 */
const items10 = [1, 'a', true, ['a'], { n: 1 }];
const result10 = items10.filter(word => typeof word !== 'object');
console.log(result10);

/** quiz11 */
const items11 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize11 = 3;

for (let i = pageSize11; i < items11.length; i += pageSize11 + 1) {
  items11.splice(i, 0, '---');
}
console.log(items11.toString());

/** quiz12 */
const items12 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize12 = 3;

function narray(data = [], size = 1) {
  const arr = [];
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}
console.log(narray(items12, pageSize12));

/** quiz13 */
const items13 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize13 = 3;

const getStartIndexByPage = function (page) {
  // quiz
  const startIndex = (page - 1) * pageSize13;

  return startIndex;
};

getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6

/** quiz 14 */
const phoneNumber = '010-1234-1234';

const check = /\d{3}-\d{4}-\d{4}/;

console.log(check.test(phoneNumber));

/** quiz 15 */
const user15 = { nick: 'nio', age: 20, location: '제주' };

user15['age'] = 21;
user15['location'] = '부산';

console.log(user15);

/** quiz18 */
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** quiz20. 다음일 구하기 */
const dday = '2022-02-02';
const ddayDay = dday.split('-');
const date = Number(ddayDay[2]) + 1;
const ndate = String(date).padStart(2, '0');
ddayDay[2] = ndate;
const ndayDay = ddayDay.join('-');
console.log(ndayDay);
