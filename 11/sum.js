const num = 3;

function sum(a, b) {
  return a + b + num;
}

function multiple(a, b) {
  return a * b * num;
}

export { sum, multiple };

//모듈
//외부에서는 볼 수 없고, 필요할 때만 꺼내쓸 수 o.

//위와 같이 하면 sum만 접근할 수 있고, num은 접근할 수 없다.
