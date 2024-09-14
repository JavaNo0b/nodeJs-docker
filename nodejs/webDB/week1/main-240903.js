var http = require('http');  //웹서버 기능의 모듈
var fs = require('fs');  // 파일처리 모듈

var app = http.createServer(
    // request를 듣고 해야하는 작업들을 정의 
    function(request, response){
       var url  = request.url; //요청된 url 정보 획득
       if (request.url == '/'){  //각 요청에 따른 작업들을 코딩
         url = '/index.html'
       }
       if (request.url == '/favicon.ico'){
         return response.writeHead(404)
       }
       response.writeHead(200);   
       console.log(__dirname+url);
       response.end(fs.readFileSync(__dirname+url))
       //end : 서버가 클라이언트에 응답하는 메소드


    }
)  //웹서버



app.listen(3000)  //request를 듣기 위한 메소드