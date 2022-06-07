// require used to include a module

const http = require('http');
var url = require('url');
// import date module
var date_time = require('./date');

const hostname = '127.0.0.1';
const port = 3000;

// req = request , res=response
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + date_time.myDateTime());
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});