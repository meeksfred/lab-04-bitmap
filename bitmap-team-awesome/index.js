'use strict';

const readBitFile = require('./lib/bit-file-helper');
const bitMapObject = require('./model/bit-map-constructor');
const colorConstructor = require('./model/color-constructor');


readBitFile(function(bitmap){
  // console.log('work', bitmap);
  // bitMapConstructor(bitmap);
  // colorConstructor.invertColor(bitmap, bitMapObject);
  colorConstructor.grayScaleColor(bitmap, bitMapObject);
  // colorConstructor.rgbScaleColor(bitmap, bitMapObject);
  // colorConstructor.changeColorBlue(bitmap, bitMapObject);
  // colorConstructor.changeColorGreen(bitmap, bitMapObject);
  // colorConstructor.changeColorRed(bitmap, bitMapObject);
});
