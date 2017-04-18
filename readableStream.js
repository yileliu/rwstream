var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

var s = request('https://app.pluralsight.com/');

s.on('data', (chunk)=>{
    console.log(">>>Data>>> " + chunk);
});

s.on('end', ()=>{
    console.log(">>>Done!>>>");
});

s.pipe(process.stdout);
s.pipe(fs.createWriteStream('pluralsight.html'));
s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gzip'));