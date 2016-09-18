'use strict';

const readBitFile = require('./lib/bit-file-helper');
const bitMapConstructor = require('./model/bit-map-constructor');
const colorConstructor = require('./model/color-constructor');


readBitFile(function(bitmap){
  // console.log('work', bitmap);
  bitMapConstructor(bitmap);
  colorConstructor.changeColorGreen(bitmap, bitMapConstructor);
  // console.log(bitmap);
  // console.log(bitMapConstructor);
});
