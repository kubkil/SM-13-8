const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        response.write(html);
        response.end();
      }
    });
  } else {
    fs.readFile('./404.jpg', function (err, jpg) {
      if (err) {
        throw err;
      } else {
        response.writeHead(404, { 'Content-Type': 'image/jpg' });
        response.write(jpg);
        response.end();
      }
    });
  }
});
server.listen(8080);