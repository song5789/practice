//숫자형 표현
let int1 = 1; // Int
let bigInt1 = 10n; // bigInt 형

//문자열 표현 ----------------------
let name = "John";

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1 + 2}`); // the result is 3

// 변수를 문자열 중간에 삽입
alert("Hello, " + name + "!"); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert("the result is " + (1 + 2)); // the result is 3

//논리형 표현 -----------------------
alert(typeof true);
let isGreater = 4 > 1; // true 값이 저장됨.
//>, <, <=, >=, ==, !=, ===, !==,

//null 표현 -----------------------
let a = null;
//null 은 객체의 초기화 : 말그대로 Null은 값이 '비어있다' 0과 같음.
alert(typeof a); // object : 객체가 아니지만 하위 호환성을 위해 놔둠.

//undefined 값
//값이 할당되지 않은 상태.
let b;

alert(typeof b); // 자료형이 undefined로 나옴.

/*
함수를 typeof 하면 function 이라는 하나의 데이터타입을 반환함. 
하지만 function은 하나의 객체로써 데이터 타입이 아님.
오래전의 규칙이라 하위호환성을 위해 유지하고 있는것 뿐임.
*/
//이상 원시 데이터형 --------------------

//이하 참조 데이터형 --------------------
//객체 (object)
//심볼 (symbol)

let name2 = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name2"}`); // hello name2

alert(`hello ${name2}`); // hello Ilya
