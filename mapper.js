#! /usr/bin/nodejs

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var splits = line.split(",");
    var getPos = function(i) {
        return splits[i] ? splits[i] : "";
    }
    process.stdout.write(getPos(1) + ";" + getPos(0) + ";" + getPos(12) + ";" + getPos(2) + '\n');
});
