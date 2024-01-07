var http = require('http');
var url = require('url');
var os = require('os');
var fs = require('fs');
var util = require('util');
var log_app = fs.createWriteStream('/app.log', {flags: 'w'});
var log_ter = fs.createWriteStream('/dev/termination-log', {flags : 'w'});
var log_stdout = process.stdout;
var status = 200;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var content = function(req, resp) {
 var path = url.parse(req.url).pathname;
 resp.writeHead(status);
 var stdlog = "Time: " + Date(Date.now()).toLocaleString() + ", Response Path : " + path;
 log_stdout.write(util.format(stdlog) + '\n');
 log_app.write(util.format(stdlog) + '\n');

 if (path.includes('favicon')){
   resp.writeHead(200);
   resp.end();

 } else if (path.includes('hostname')){
   resp.end("Hostname : "+os.hostname() + "\n");

 } else if (path.includes('version')){
   resp.end("Version : v3" + "\n");

 } else if (path.includes('ingress1') || path.includes('ingress2')){
   resp.end("Hostname : "+os.hostname() + "\n");

 } else if (path.includes('health')){
   if (status == 500){
     resp.end(os.hostname() + " : Internal Server Error" + "\n");
   } else {
     resp.end(os.hostname() + " is Running" + "\n");
   }

 } else if (path.includes('status')){
   if (path.includes('500')){
     status = 500;
     resp.end("Status Code has Changed to 500" + "\n");
   } else {
     status = 200;
     resp.end("Status Code has Changed to 200" + "\n");
   }

 } else if (path.includes('sleep')){
   if (path.includes('30')){
      sleep(30000).then(() => {resp.end("Sleep 30" + "\n");});
   } else if (path.includes('100')){
      sleep(100000).then(() => {resp.end("Sleep 100" + "\n");});
   }

 } else if (path.includes('termination')){
   try {
     throw new Error('User called process.exit()');
   } catch (e) {
     log_ter.write(e.message);
     process.exit();
   }

 } else {
   resp.end("No defined Path." + "\n");
 }
}
var w = http.createServer(content);
w.listen(8080);
