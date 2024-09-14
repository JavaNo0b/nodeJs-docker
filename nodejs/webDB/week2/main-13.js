const express = require('express') // ① express 모듈을 import. const에 의해 express 변수는 값이 바뀌지 않음
const app = express() // ② express() 함수에 의해 Application 객체를 app에 저장
app.get('/',(req, res)=>res.send('Hello World')) // ③ get(path, callback) : 사용자가 해당 경로를 요청하면 callback 실행
                                                    // get 메소드는 라우팅(URL 분류기) 기능을 수행 : 요청된 경로마다 응답해 주는 기능
                                                    // 더 이상 if else로 URL 분류할 필요 없음
                                                    // res.send 메소드 : express에서 res 객체에 send 메소드 추가. end 메소드와 같은 기능

app.get('/author',(req, res)=>res.send('/author')) 
app.get('/main',(req, res)=>res.send('<html><title></title><body><h1>Main</h1></body></html>'))
app.listen(3000, () => console.log('Example app listening on port 3000')) // 웹의 요청을 수신, 이벤트 루프


