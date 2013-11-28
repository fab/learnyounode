var fs = require('fs');

module.exports = function(directory, extension, callback) {
  var regex = new RegExp('\\.' + extension + '$');

  fs.readdir(directory, function(err, data) {
    if (err)
      return callback(err);

    var list = []

    data.forEach(function(element, index, array) {
      if (regex.test(element)) {
        list.push(element);
      }
    });

    callback(null, list);
  });
}
