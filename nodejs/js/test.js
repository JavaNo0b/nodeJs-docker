    // setTimeOut
// function run(){
//     console.log("3초 후 실행")
// }

// console.log("시작")
// setTimeout(run,3000)
// console.log("끝")

    //none-blocking
// function longRunningTask(){
//     console.log("작업 끝")
// }

// console.log("시작")
// // 0초이지만 논블로킹으로 실행 돼 '다음 작업'이 먼저 출력
// setTimeout(longRunningTask,0)
// console.log("다음 작업")

    // blocking
// function longRunningTask(){
//     console.log("작업 끝")
// }

// console.log("시작")
// longRunningTask()
// console.log("다음 작업")