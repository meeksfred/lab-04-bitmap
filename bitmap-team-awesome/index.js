'use strict';

const readBitFile = require('./lib/bit-file-helper.js');
const bitMapConstructor = require('./model/bit-map-constructor.js');
const colorConstructor = require('./model/color-constructor.js');

readBitFile(function(bitmap){
  // console.log('work', bitmap);
  bitMapConstructor(bitmap);
  colorConstructor.changeColorBlue(bitmap);
  // console.log(bitmap);
  console.log(bitMapConstructor);
});
