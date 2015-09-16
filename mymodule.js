var fs = require('fs');
var path = require('path')

function moduleFunction(directoryName, fileExtension, callback) {
  
  if (err)
    return callback(err);

  fs.readdir(directoryName, function (err, list){
    if (err)
      return callback(err);

    list.forEach(function (file) {
      if (path.extname(file) === "." + fileExtension)
        console.log(file);
    })
  });

  callback(null, file);

}

module.exports = moduleFunction;