const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', function (request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        throw err;
      } else {
        response.write(data);
        response.end();
      }
    });
  } else {
    fs.readFile('./404.jpg', function (err, data) {
      if (err) {
        throw err;
      } else {
        response.writeHead(404, { 'Content-Type': 'image/jpg' });
        response.write(data);
        response.end();
      }
    });
  }
});
server.listen(8080);