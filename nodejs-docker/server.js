// 202034222 박성현 2주차 과제
const express = require('express');
const app = express();

app.get('/:id',(req,res)=>{

    var id = req.params.id;
    var content = new Array('','');

    if(id === 'BOOK'){
        content = ['총균쇠', '내면소통'];
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEEK2</title>  
        <meta charset="utf-8">
        </head>
        <body>
        <h1>책과 음악이 있는 곳</h1>
        <hr>
        <h3><a href="/BOOK">1. 책</a></h3>
        <ul>
        <li>${content[0]}</li>
        <li>${content[1]}</li>
        </ul>
        <h3><a href="/MUSIC">2. 음악</a></h3>
        </body>
        </html> `;
        res.send(template);
    } else if(id === 'MUSIC'){
        content = ['바빌론 강가에서', "I'll be missing you"];
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEEK2</title>  
        <meta charset="utf-8">
        </head>
        <body>
        <h1>책과 음악이 있는 곳</h1>
        <hr>
        <h3><a href="/BOOK">1. 책</a></h3>
        <h3><a href="/MUSIC">2. 음악</a></h3>
        <ul>
        <li>${content[0]}</li>
        <li>${content[1]}</li>
        </ul>
        </body>
        </html> `;
        res.send(template);
    }
});
app.get('/',(req,res)=>{
    var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEEK2</title>  
    <meta charset="utf-8">
    </head>
    <body>
    <h1>책과 음악이 있는 곳</h1>
    <hr>
    <h3><a href="/BOOK">1. 책</a></h3>
    <h3><a href="/MUSIC">2. 음악</a></h3>
    </body>
    </html> `;
    res.send(template);
});

app.get('/favicon.ico',(req, res)=>res.writeHead(404));

app.listen(3000, ()=>console.log('Example app listening on port 3000'));