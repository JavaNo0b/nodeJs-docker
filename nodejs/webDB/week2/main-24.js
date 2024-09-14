const express = require('express') // ① express 모듈을 import. const에 의해 express 변수는 값이 바뀌지 않음
const app = express() // ② express() 함수에 의해 Application 객체를 app에 저장
var urlm = require('url');

app.get('/:id',(req,res)=>{
    // var _url = req.url;
    var id = req.params.id;
    if(id == ""){
        var title = 'Welcome';
    } else {
        var title = id ;
    }

    // var queryData = urlm.parse(_url,true).query; 
    

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
    <li><a href="/HTML">HTML</a></li>
    <li><a href="/CSS">CSS</a></li>
    <li><a href="/JavaScript">JavaScript</a></li>
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
    res.send(template)
});
app.get('/favicon.ico',(req, res)=>res.writeHead(404));

app.listen(3000, () => console.log('Example app listening on port 3000')) // 웹의 요청을 수신, 이벤트 루프

