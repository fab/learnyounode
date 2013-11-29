var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var results = []
var returned = 0

urls.forEach(function (url, index) {
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err) throw err
      results[index] = data.toString();
      returned++
      if (returned == 3) {
        results.forEach(function (result) {
          console.log(result)
        })
      }
    }))
  })
})


