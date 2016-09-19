'use strict';

const fs = require('fs');
const bufferObject = require('../model/bit-map-constructor');

module.exports = function(callback, callback2) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if (err) return callback(err);
    var bitmap = data;
    callback2 = new bufferObject(data);
    callback(null, bitmap, callback2);
  });
};
  // console.log('# of pixels or pixel array size', 11078 - 1078);
  // console.log('file size in bytes', data.readUInt32LE(2));
  // console.log('offset of pixel array in bytes', data.readUInt32LE(10));
  // console.log('size of color array in bytes', (1078 - 54));
  // console.log('total number of colors', ((1078 - 54) / 4));
