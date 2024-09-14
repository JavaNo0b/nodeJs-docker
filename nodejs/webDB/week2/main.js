var http = require('http'); // 모듈 http : 웹서버 기능의 모듈
var fs = require('fs'); // 파일 처리 모듈
var urlm = require('url'); // url 모듈 요청, url 모듈에 담긴 기능 사용 가능

var app = http.createServer(
  function(req, res){
    var _url = req.url;
    var queryData = urlm.parse(_url,true).query; // url에서 querystring 문자열만 추출 /  http://localhost/?id=HTML -> 객체를 return {id : ‘HTML’} / true : 객체 형태로 저장하라
    // var queryData = urlm.parse(_url,true).path; // 도메인/ 뒤의 경로 저장
    // var queryData = urlm.parse(_url,true).pathname; // path를 제외한 url 저장
    console.log(_url); 
    console.log(queryData); 
    var title = queryData.id // ① title 변수에 저장

    // console.log(queryData.id); // queryData.id로 바꾸어서도 실행 시켜보기
    // console.log(queryData.name); // queryData.name로 바꾸어서도 실행 시켜보기

    if(_url == '/'){
      // _url = '/index.html';
      title = 'Welcome'; // ② undefined 방지

    }
    if(_url == '/favicon.ico'){
      return res.writeHead(404);
    }
    res.writeHead(200);// ③ HTML에서 변수사용

    // ② var template 추가
    var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>  
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="05-index.html">WEB</a></h1>
    <ol>
    <li><a href="/?id=HTML">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2> // ④ HTML에서 변수사용
    <p><a href="https://www.w3.org/TR/html5/" target="_blank" 
    title="html5 speicification">Hypertext Markup Language (HTML)</a> is 
    the standard markup language for <strong>creating <u>web</u> 
    pages</strong> and web applications.Web browsers receive HTML 
    documents from a web server or from local storage and render them into 
    multimedia web pages. HTML describes the structure of a web page 
    semantically and originally included cues for the appearance of the 
    document.
    <img src="05-coding.jpg" width="100%">
    </p><p style="margin-top:45px;">HTML elements are the building 
    blocks of HTML pages. With HTML constructs, images and other objects, 
    such as interactive forms, may be embedded into the rendered page. It 
    provides a means to create structured documents by denoting structural 
    semantics for text such as headings, paragraphs, lists, links, quotes 
    and other items. HTML elements are delineated by tags, written using 
    angle brackets.
    </p>
    </body>
    </html> `;

    res.end(template); // ⑤ 수정
  });


  //   res.end(queryData.id);
  //   // res.end(fs.readFileSync(__dirname + _url));
  // }
// )
app.listen(3000); // request를 듣기 위한 코드


// // 외부 ip 이용
// var http = require('http');
// const host = '192.168.0.5';
// var app = http.createServer( function(req,res){ 
//   // 여기에 클라이언트의 요청을 받아서 URL을 분류하고
//   // URL에 따른 controller에 해당하는 로직을 작성
//   res.writeHead(200); 
//   res.end("Hello. My response, Node.js !!!")
// });
// app.listen(3000,host);