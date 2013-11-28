var filter = require('./module.js')

filter(process.argv[2], process.argv[3], function(err, list) {
  if (err) return err

  list.forEach(function(element){
    console.log(element)
  })
})
