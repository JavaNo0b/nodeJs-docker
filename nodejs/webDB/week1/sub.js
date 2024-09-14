// 굉장히 중요함

var http = require('http');
var fs = require('fs');

var app = http.createServer(
    function(request, response){
        var url = request.url; // 요청된 url 정보 획득
        if (request.url == '/'){
            url = '/index.html';
        }
        if (request.url == '/favicon.ico'){
            return response.writeHead(404)
        }
        response.writeHead(200);
        console.log(__dirname + url) // 웹브라우저가 요청한 파일을 콘솔에 출력
        response.end(fs.readFileSync(__dirname + url)); // end : 응답하는 액션에 해당하는 메소드
    }
);
app.listen(3000);