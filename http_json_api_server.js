var http = require('http'),
    url = require('url')

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true),
      time = new Date(parsedUrl.query.iso),
      result

  if (parsedUrl.pathname == '/api/parsetime') {
    result = {
      'hour' : time.getHours(),
      'minute' : time.getMinutes(),
      'second' : time.getSeconds()
    }
  }

  else if (parsedUrl.pathname == '/api/unixtime') {
    result = {
      'unixtime' : time.getTime()
    }
  }

  res.writeHead(200, { 'Content-Type' : 'application/json'})
  res.end(JSON.stringify(result))
})

server.listen(8000)
