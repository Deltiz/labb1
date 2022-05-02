//Laboration 1




//Laboration 1


/*
'use strict';
const fs = require('fs');
const http = require('http');

const uc = require('upper-case');

http.createServer(function(req,res) {
    
    let content = fs.readFileSync('index.html').toString();
    content = uc.upperCase(content);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(content);
}).listen(3001);


const http =require('http');

const server = http.createServer((req,res)=>{
    res.Write("välkommen till första sidan");
    res.end();

    if(req.url=='/skriv'){
        setTimeout(function () {
            // after 2 seconds
            window.location = "/skriv.html";
         }, 2000)
    }

})

server.listen(3005)


//section 


const Mylist = document.querySelector("#section");

const list = document.createElement('p');

list.textContent="adam är kung"

Mylist.append(list);


const http = require('http')

const server=http.createServer((req,res)=>{
    res.write('min sida')
    res.end();
})
server.listen(3005);
*/

var http = require('http'),
        fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
        if(!responseCode) responseCode = 200;
        fs.readFile(__dirname + path, function(err,data) {
                if(err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('500 - Internal Error');
                } else {
                        res.writeHead(responseCode,
                                { 'Content-Type': contentType });
                        res.end(data);
                }
            }
        );
}

http.createServer(function(req,res){
        // normalize url by removing querystring, optional
        // trailing slash, and making lowercase
        var path = req.url.replace(/\/?(?:\?.*)?$/, '')
                .toLowerCase();
        switch(path) {
                case '':
                        serveStaticFile(res, '/index.html', 'text/html');
                        break;
                case '/skriv':
                        serveStaticFile(res, '/skriv.html', 'text/html');
                        break;
               
                default:
                        serveStaticFile(res, '/404.html', 'text/html',404);
                        break;
        }
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

console.log("section");

  
  document.querySelector("p");

const list = document.createElement('.p');

list.textContent="adam är kung"

Mylist.append(list);

console.log("section");

console.log();
//virtuell dom
//document.querySelector("p").style.backgroundColor = "red";

