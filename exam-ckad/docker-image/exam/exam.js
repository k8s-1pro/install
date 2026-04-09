var http = require('http');

var content = function(req, resp) {

  if (req.url === "/healthz") {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("Health Check OK!\n");
    return;
  }
  if (req.url === "/ready") {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("Ready Check OK!\n");
    return;
  }

  if (req.url === "/version") {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("version: v1\n");
    return;
  }

  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end("hello\n");
}

var w = http.createServer(content);
w.listen(8080);