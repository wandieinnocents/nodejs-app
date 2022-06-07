// require used to include a module

const http = require('http');
var url    = require('url');
var fs     = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');


// import date module
var date_time = require('./date');

const hostname = '127.0.0.1';
const port = 3000;

// req = request , res=response
const server = http.createServer((req, res) => {


 if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});