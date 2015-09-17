var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var d = new Date(parsedUrl.query.iso)
  var result

  if (parsedUrl.pathname === '/api/parsetime') {
    result = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }
  }

  if (parsedUrl.pathname === '/api/unixtime') {
    result = {
      unixtime: d.getTime()
    }
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }

})

server.listen(Number(process.argv[2]))