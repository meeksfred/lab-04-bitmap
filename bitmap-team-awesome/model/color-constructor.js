'use strict';

// const bufferObject = require('./bit-map-constructor');

module.exports = exports = {};

exports.changeColorGreen = function(buffer, bufferObject) {
  var colorArray = [];
  var x,i;
  var newColorArray = buffer.slice(54, 1078);
  console.log('object', bufferObject);
  for (i=54;i<=bufferObject.colorOffSet;i++){
    colorArray.push(buffer.readUInt8(i));
    // console.log(buffer);
  }
  for (x=0;x<colorArray.length;x+=4){
    colorArray[x] = 255;
    colorArray[x+1] = 0;
    colorArray[x+2] = 0;
    colorArray[x+3] = 0;
    newColorArray.writeUInt8(x);
  }
  console.log('buff slice', newColorArray);
  console.log(colorArray);
  // console.log('buffer', buffer);
};
