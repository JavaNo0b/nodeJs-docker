// 구조 분해 할당

var candyMachine = {
    status : { // 객체를 값으로 갖는 변수
        name: 'node',
        count: 5,
    },
    getCandy: function(){ // 함수를 값으로 갖는 변수
        this.status.count--;
        return this.status.count;
    },
};
// var getCandy = candyMachine.getCandy
// var count = candyMachine.status.count

const {getCandy, status : {count}} = candyMachine;
getCandy1 = getCandy.bind(candyMachine)

console.log(count)
t = getCandy1()
console.log(count)
console.log(t)
