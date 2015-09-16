var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });  

  if(req.method === "POST") {
    req.on('data', function(data) {
      data.pipe(map(function (chunk) {
        return chunk.toString().split('').reverse().join('')
      })).pipe(res)
    });
  }

})

server.listen(process.argv[2])

