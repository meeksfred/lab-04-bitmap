'use strict';

const readBitFile = require('./lib/bit-file-helper');
const colorConstructor = require('./model/color-constructor');
const EE = require('events');
const ee = new EE();

ee.on('first', function(){
  readBitFile(function(err, bitmap, bitMapObject){
    if(err) return ee.emit('error', err);
    colorConstructor.grayScaleColor(bitmap, bitMapObject);
    ee.emit('second');
  });
});

ee.on('second', function(){
  readBitFile(function(err, bitmap, bitMapObject){
    if(err) return ee.emit('error', err);
    colorConstructor.rgbScaleColor(bitmap, bitMapObject);
    ee.emit('third');
  });
});

ee.on('third', function(){
  readBitFile(function(err, bitmap, bitMapObject){
    if(err) return ee.emit('error', err);
    colorConstructor.invertColor(bitmap, bitMapObject);
  });
});

ee.on('error', function(err){
  console.error('got error', err);
});

ee.emit('first');
