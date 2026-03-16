var http = require('http');

var content = function(req, resp) {

  if (
    req.url === "/ready" ||
    req.url === "/startup" ||
    req.url === "/readiness" ||
    req.url === "/liveness"
  ) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end("ok\n");
    return;
  }

  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end("hello\n");
}

var w = http.createServer(content);
w.listen(8080);