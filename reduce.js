#!/usr/bin/env node

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

var oldKey = "";
var wbanMax = "";
var keyMax = -99999;
var maxHour = "";

rl.on('line', function(line){
	var splits = line.split(";");
	if (oldKey == splits[0] && wbanMax == splits[1]) {
		if (splits[2] > parseFloat(keyMax)) {
			keyMax = splits[2];
			maxHour = splits[3];
		}
	} else {
		if (oldKey) {
			process.stdout.write("Fecha: " + oldKey + " - Wban:" + wbanMax + " - Temp Max: " + keyMax + " - Hora: " + maxHour + '\n');
		}
		oldKey = splits[0];
		wbanMax = splits[1];
		keyMax = splits[2];
		maxHour = splits[3];
	}
});