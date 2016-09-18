'use strict';

// const buf = require('../lib/bit-file-helper.js');

module.exports = function Bitmap(buffer){
  // var bufferHeaderData = {};
  Bitmap.fullSize = buffer.readUInt32LE(2);
  Bitmap.colorOffSet = buffer.readUInt32LE(10);
  console.log('constructor', buffer);
  return Bitmap;
};
