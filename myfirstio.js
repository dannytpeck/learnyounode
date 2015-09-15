var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var newlines = str.split('\n');

console.log(newlines.length - 1);