'use strict';

const readBitFile = require('./lib/bit-file-helper');
const bitMapObject = require('./model/bit-map-constructor');
const colorConstructor = require('./model/color-constructor');


readBitFile(function(bitmap){
  // console.log('work', bitmap);
  // bitMapConstructor(bitmap);
  colorConstructor.changeColorBlue(bitmap, bitMapObject);
  // console.log(bitmap);
  // console.log(bitMapConstructor);
});
