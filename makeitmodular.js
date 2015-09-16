var mymodule = require('./mymodule.js'),
    dirName = process.argv[2],
    ext = process.argv[3];

mymodule(dirName, ext, function(err, files){
  if (err) {
    throw err;
  }

  files.forEach(function (file) {
    console.log(file);
  });
});