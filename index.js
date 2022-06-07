// require used to include a module

const http = require('http');
var url    = require('url');
var fs     = require('fs');
// import date module
var date_time = require('./date');

const hostname = '127.0.0.1';
const port = 3000;

// req = request , res=response
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});