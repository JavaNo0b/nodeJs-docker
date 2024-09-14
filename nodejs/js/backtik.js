// 백틱으로 감싸는 문자열을 템플릭 문자열이라고 함
// 백틱 안에 ${변수명}과 같이 변수 이용 가능

var num1 =1;
var num2 =2;
var result =3;

var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1)
var string2 = `${num1} 더하기 ${num2} 는 '${result}'`
console.log(string2)