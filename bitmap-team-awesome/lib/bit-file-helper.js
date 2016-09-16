'use strict';

const fs = require('fs');
module.exports = exports = {};

exports.offset;
exports.read = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if (err) return callback(err);
    var result = data.readUInt16LE();
    exports.offset = data.readUInt32LE(10);
    console.log('file size in bytes', data.readUInt32LE(2));
    console.log('offset of pixel array in bytes', data.readUInt32LE(10));
    console.log('size of color array in bytes', (1078 - 54));
    console.log('total number of colors', ((1078 - 54) / 4));
    console.log('# of pixels or pixel array size', 11078 - 1078);
    var colorArray = [];
    // var byte;
    var i,x;
    var z;
    for (i=54;i<=1078;i+=4){
      for (x=i;x<i+4;x++){
        // data.slice()
        colorArray.push(data.readUInt8(x));

        // console.log(`${i},${x}: ${data.readUInt8(x)}`);
      }
      // byte = data.readUInt8(i);
      // colorArray.push(byte);
    }
    callback(colorArray);
  });
};

exports.write = function
    for(z=0;z<=colorArray.length;z+=4){
      fs.writeFile()
    }

    // console.log('1 pixel?', data.toString('hex', 55, 58));
    // console.log('1 pixel?', data.toString('hex', 1078, 1079));
    // console.log('all data', data);
    console.log(colorArray);
