var http = require('http'); // 모듈 http : 웹서버 기능의 모듈
var fs = require('fs'); // 모듈 fs : 파일처리 시스템 기능의 모듈
var app = http.createServer(function(request,response){ // app : http.createServer로 만든 웹 서버

    // request를 듣고 해야하는 작업들을 정의

    var url = request.url;
    if(request.url == '/'){ // URL
      url = '/index.html'; // Controller
    }
    if(request.url == '/main'){ // URL
      url = '/2.html'; // Controller
    }
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url); // 웹브라우저가 요청한 파일을 콘솔에 출력
    response.end(fs.readFileSync(__dirname + url)); // Template / __dirname = 현재 파일의 절대경로
});

app.listen(3000); // request를 듣기 위한 코드