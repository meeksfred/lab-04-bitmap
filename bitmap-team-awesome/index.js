'use strict';

const readBitFile = require('./lib/bit-file-helper.js');
const bitMapConstructor = require('./model/bit-map-constructor.js');


readBitFile(function(bitmap, ){
  console.log('work', bitmap);
  bitMapConstructor(bitmap);
  bitMapConstructor.changeColorGreen(bitmap, )
  // console.log(bitmap);
  // console.log(bitMapConstructor);
});
