// var : 함수 스코프
// const, let : 블록 스코프 -> 블록이란 증괄호 {} 내의 영역

if(true){
    var x = 3;
}
console.log(x);

if(true){
    const y = 3;
}
// 블록 밖이므로 const y는 정의되어 있지 않음
// console.log(y);