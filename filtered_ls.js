var fs = require('fs')

var directory = process.argv[2]
var extension = process.argv[3]
var pattern = new RegExp('\\W' + extension)

fs.readdir(directory, function(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (pattern.test(list[i])) {
      console.log(list[i])
    }
  }
})
