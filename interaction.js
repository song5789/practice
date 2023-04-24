//아래의 모든 함수는 window 객체의 메소드들임. 앞의 window. 가 생략된 상태.

alert(true); // alert 브라우저에서 경고창을 띄움.
//어떠한 값도 리턴하지않고 인자로 들어온 값을 표시해주기만함.

//prompt(message, defaultValue) : 사용자에게 값을 입력받음.
//사용자에게 값을 입력 받아 변수에 대입할 수도 있음.
let result = prompt("값을 넣으시오.", 8);
alert(result);

//confirm : 사용자에게 true 또는 false 값을 입력 받음.
let yesNo = confirm("당신은 성인입니까?");
yesNo ? alert("성인") : alert("미성년");
