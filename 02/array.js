/** 배열 메소드 */
//배열 변수 선언할 때 -> s를 많이 붙임.
var words = ["a", "b", "c"];
//["c"]
console.log(words.pop()); //c

words.push("d");

console.log(words); //a b d

console.log(words.join("-")); //a-b-d

words.join("-");

console.log(words); //['a', 'b', 'd']

//원본이 수정될 수 있는 메소드의 사용을 조심해야한다.(불변성이 유행)
//ex. pop, push

var num = [1, 2, 3];

console.log(words.concat(num)); //['a', 'b', 'd', 1, 2, 3]

console.log(words); //['a', 'b', 'd']

//---

//unshift
//새로운 요소를 앞쪽에 추가
const words2 = ["A", "B", "C"];
words2.unshift("z");
console.log(words2); //['z', 'A', 'B', 'C] //const인데 변경 why?

//forEach
words2.forEach(function (word) {
  console.log(word); //z A B C
});

//map
//배열을 순회하는 메서드
var newWords = words2.map(function (e) {
  return e + " ok";
});
console.log(newWords); //["z ok", "A ok", "B ok", "C ok"];

//---

var nums = [1, 2, 3, 4, 5];
var newNums1 = [];
var newNums2 = [];

//방법1
for (var i = 0; i < nums.length; i++) {
  if (nums[i] >= 3) {
    newNums1.push(nums[i]);
  }
}
console.log(newNums1); //[3, 4, 5]

//방법2
var newNums2 = nums.filter(function (num) {
  return num >= 3;
});
console.log(newNums2);

//방법3
var newNums = nums
  .filter(function (num) {
    return num >= 3;
  })
  .map(function (num) {
    return num + 10;
  });
