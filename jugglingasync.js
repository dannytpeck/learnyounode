var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

http.get(process.argv[2], function(response) {
  var firstPage;
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);

    results[0] = data.toString();
  }));
  response.on('end', function() {
    count++;
    if (count == 3) {
      printResults();
    }
  })
});

http.get(process.argv[3], function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);

    results[1] = data.toString();
  }));
  response.on('end', function() {
    count++;
    if (count == 3) {
      printResults();
    }
  })
});

http.get(process.argv[4], function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);

    results[2] = data.toString();
  }));
  response.on('end', function() {
    count++;
    if (count == 3) {
      printResults();
    }
  })
});

function printResults() {
  for (var i = 0; i < 3; i++)
    console.log(results[i]);
}