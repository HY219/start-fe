var title = "abc";
console.log(title);

//number
var count = 5;

//string
var count = "5";

var nick = "AJ";
var nick = "AJ";

//boolean
var isMan = true;

//function
var log = function (str) {
  console.log(str);
};

log(nick);

//object
var image = { alt: "test" };

image.width = 100;
image.height = 100;
console.log(image);
console.log(image.width);
console.log(image["width"]);

//array
var image = ["1.jpg", "2.jpg"];
console.log(image, image.length);

image[0] = "3.jpg";
image[1] = "4.jpg";
console.log(image);

//처음 변수를 선언할 때 초기화 된 값으로 정의해 두는 것이 좋음.
//(null 값 보다는 '초기화 된 값')
var nick = "";
var title = -1;
var isMan = true; //true, false, null

//주요 연산자
console.log(1 + 2);
//---
//마지막 콘솔창에 undefined가 뜨는 것은 함수가 반환하는 값이 없기 때문. -> 안 좋음.

// console.log(nick == '');

console.log(!true); //false
console.log(!!true); //true
//!! 두개를 사용하는 경우 -> boolean 타입으로 자동 형변환을 해줌.
var nick = "aj";
if (nick) {
  console.log("hi " + nick);
}

var isNaick = Boolean(nick); //다음과 같이 명시해주면 불편하니
//아래와 같이 사용하는 경우가 있다. //'nick은 boolean 속성입니다!' 하고 알려주는 것임.
if (!!nick) {
  console.log("hi " + nick);
}

var a;
console.log(a, nick);

//js도 클래스, 인스턴스 개념이 있구나

//배열에는 같은 타입을 넣는 것이 좋다.

//내장 객체 : 기본적으로 브라우저라면 가지고 있는 객체(우리가 정의x)

//---

//**배열 */
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach
const array1 = ["a", "b", "c"];
array1.forEach((e) => console.log(e)); //a b c
array1.forEach(function (word) {
  console.log(word); //a b c
});
