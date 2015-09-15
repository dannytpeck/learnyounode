var fs = require('fs');
var path = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(path, function (err, list){
  //Filter list to only files that end with . + fileExtension
});
