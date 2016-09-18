'use strict';

module.exports = function Bitmap(buffer){
  Bitmap.fullSize = buffer.readUInt32LE(2);
  Bitmap.colorOffSet = buffer.readUInt32LE(10);
  // console.log('constructor', buffer);
  return Bitmap;
};
