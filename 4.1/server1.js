const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node Server</h1>');
    res.end('<p>res.end</p>');
})
    .listen(8080, () => {
        console.log('8080 on');
    });

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node Server 8081</h1>');
    res.end('<p>res.end</p>');
})
    .listen(8081, () => {
        console.log('8081 on');
    });


    