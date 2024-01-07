var http = require('http');
var content = function(req, resp) {
 resp.writeHead(200);
 resp.end("containerPort : 8000" + "\n");
}
var w = http.createServer(content);
w.listen(8000);
