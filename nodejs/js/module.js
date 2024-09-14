
//require 함수 : 외부 모듈을 객체로 반환
const { odd, even } = require('./module-var'); // 구조분해할당
const mtest = require('./module-var');
function checkOddOrEven(num) {
    if (num%2) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(5));

function checkOddOrEven2(num){
    if (num%2) {
        return mtest.odd;
    }
    return mtest.even;
}

console.log(checkOddOrEven2(8));