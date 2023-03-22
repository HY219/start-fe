// const a = 'a';
// console.log(a);
// a = '11';
// console.log(a);
//prettier를 사용해서

//array create
const todos = ['운동'];
//findIndex //충족하는 배열의 첫번째 요소 인덱스를 반환하는 메서드.
const todo = '공부';
todos.push(todo);
console.log(todos);
console.log(todo);

//read
todos.forEach(function (todo) {
  console.log(todo);
});

//update
const updateTodo = '공부';
const updateIndex = todos.findIndex(function (todo) {
  return todo === updateTodo;
});

const newTodos = todos.map(function (todo) {
  if (todo === updateTodo) {
    return '게임';
  }
  return todo;
});
console.log(newTodos);

//

var a = 1;
var b = a;
b = 2;
console.log(a, b);

//원시타입과 참조타입의 차이
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

//함수에 값을 넣을 때, 따로 선언해서 넣는 방식을 많이 사용한다?
//call by value
function byValue(count) {
  count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count) {
  count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count); // ["1","2"]

const array = { a: 1, b: 1 };
array.c = 1; //가능, 내부 내용 변경 가능
console.log(array);
// a = { c: 1 }; //Assignment to contant variable //재할당 불가능

//**구문*/
//삼항연산자

//함수
//return 문이 없을 경우 undefined 반환

/**주요 전역함수 */
// alert('alert');

// var who = prompt('당신은 누구?');

// var isDelete = confirm('정말 삭제합니까?');
//Yes -> True
//No -> False

var enc = encodeURIComponent('카카오');

//문자형 숫자도 숫자로 인식하기 때문에 -> false
console.log(isNaN('1')); //숫자 여부 //false
//문자 -> true
console.log(isNaN('a')); //true
//문자 -> true
console.log(isNaN(1)); //false

/**parseInt */
//항상 두번째 인자를 주는 습관!

/**setTimeout, setInterval */
//clearTimeout(id) ; //setTimeout을 멈춤
//clearInterval(id); //setInterval을 멈춤

/**스코프 */
//유효범위
var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age); //aji 30
}

test();
// console.log(age); //age is not defined

//호이스팅
var name = 'global';
function test2() {
  console.log(name); //undefined
  var name = 'local';
  console.log(name); //local
}
test2();
//블록스코프, 함수 스코프

/**함수 */
//함수이름을 쓰고 인자를 넣어주면, 함수를 호출할 수 있다.

//멤버변수
//함수가 특정 object의 값으로 사용 가능.

//익명함수표현식

//함수를 만들자마자 실행하는 구조

/**표현식 */

/**정규표현식 */
//특정 패턴들을 찾기 위한 정규표현식

/**quiz */
//1
//js코드)  var count = [10,20,30,40,50,60,70,100];  배열 count 요소들의 평균값 구하는 코드를 작성하세요
var count = [10, 20, 30, 40, 50, 60, 70, 100];
var sum = 0;
for (i = 0; i < count.length; i++) {
  sum += count[i];
}
const average = sum / count.length;

//2
//js코드)  구구단을 출력하는 코드를 for구문을 사용하여 작성하세요
for (i = 1; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

//3
//js코드)  위에서 만든 구구단코드를 함수로 작성하세요
function multiplication(num) {
  i = num;
  for (j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

//4
//js코드)  메소드가 포함된 객체를 생성하세요
const student = {
  do: function () {
    console.log('달리자');
  },
  name: 'Hue',
};

//5
//js코드) window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요.  (예제 https://giphy.com/gifs/f9H3mUifQb6OP5TAyR)
const array = [];
let sum = 0;
let num = true;
while (num) {
  const numbers = window.prompt('숫자를 입력하세요.');
  array.push(Number(numbers));
  if (numbers == null) {
    num = false;
  } else {
    num = true;
  }
}
for (i = 0; i < array.length; i++) {
  sum += array[i];
}
alert(`숫자의 합 ${sum}`);
