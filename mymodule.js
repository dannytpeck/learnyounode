var fs = require('fs'),
    path = require('path'),
    files = [];

module.exports = function moduleFunction(dirName, ext, callback) {
  fs.readdir(dirName, function (err, files){
    if (err)
      return callback(err);

    files = files.filter(function (file) {
      if (path.extname(file) === "." + ext) {
        return file;
      }
    })
    return callback(null, files);
  });

};