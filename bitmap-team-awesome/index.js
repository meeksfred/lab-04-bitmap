'use strict';

const readBitFile = require('./lib/bit-file-helper');
const bitMapObject = require('./model/bit-map-constructor');
const colorConstructor = require('./model/color-constructor');
const EE = require('events');
const ee = new EE();


// readBitFile(function(bitmap, bitMapObject){
//   // console.log('work', bitmap);
//   // bitMapConstructor(bitmap);
//   // colorConstructor.invertColor(bitmap, bitMapObject);
//   console.log (bitmap, bitMapObject);
//   // colorConstructor.grayScaleColor(bitmap, bitMapObject);
//   // colorConstructor.rgbScaleColor(bitmap, bitMapObject);
//   // colorConstructor.changeColorBlue(bitmap, bitMapObject);
//   // colorConstructor.changeColorGreen(bitmap, bitMapObject);
//   // colorConstructor.changeColorRed(bitmap, bitMapObject);
// });

ee.on('first', function(){
  readBitFile(function(bitmap, bitMapObject){
    // console.log (bitmap, bitMapObject);
    colorConstructor.grayScaleColor(bitmap, bitMapObject);
    ee.emit('second');
  });
});

ee.on('second', function(){
  readBitFile(function(bitmap, bitMapObject){
    // console.log (bitmap, bitMapObject);
    colorConstructor.rgbScaleColor(bitmap, bitMapObject);
    ee.emit('third');
  });
});

ee.on('third', function(){
  readBitFile(function(bitmap, bitMapObject){
    // console.log (bitmap, bitMapObject);
    colorConstructor.invertColor(bitmap, bitMapObject);
  });
});

ee.emit('first');
