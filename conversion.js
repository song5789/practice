//형변환
//자동형변환 (암묵적 형변환)
//수동형변환 (명시적 형변환)
alert(true); // 암묵적으로 String으로 변환하여 표현함.
alert(String(true)); //명시적으로 String으로 변환함.

//true + ""; 해도 암묵적으로 String으로 변환함.

//문자열 뿐만아니라 숫자형으로도 변환가능.
//-, /, *, %, ** : 연산자가 들어가면 자동으로 숫자 변환.
//+ : 뒤에 문자가 붙는다면 문자열로 변환하여 붙여버림. 주의!

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.
//parseInt, parseFloat -> 형변환. 각각 정수와 실수로 변환함.

alert(typeof num); // number
