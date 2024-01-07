var http = require('http');
var content = function(req, resp) {
 resp.writeHead(200);
 resp.end("Order Service." + "\n");
}
var w = http.createServer(content);
w.listen(8080);
