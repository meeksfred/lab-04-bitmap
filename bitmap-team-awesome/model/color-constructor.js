'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.changeColorBlue = function(buffer, bufferObject) {
  var x;
  var blueColorArray = buffer.slice(54, bufferObject.colorOffSet);
  console.log('object', bufferObject);
  // After lots of testing, I realized that this first for loop was also unneccesary, because I can just change the rgba values in the for loop (below) by acting directly on the chunk of the buffer that I'm interested in.

  // for (i=54;i<=bufferObject.colorOffSet;i++){
  //   colorArray.push(buffer.readUInt8(i));
  // }
  for (x=0;x<blueColorArray.length;x+=4){
    blueColorArray[x] = 255;
    blueColorArray[x+1] = 0;
    blueColorArray[x+2] = 0;
    blueColorArray[x+3] = 0;
    // The action below is unneccesary because I'm already rewriting the buffer chunk by assigning the buffer.slice (above) to blueColorArray, and subsequently changing the rgba values in the second for loop.
    // buffer.writeUInt8(blueColorArray, x);
  }
  console.log('buff slice', blueColorArray);
  fs.writeFile(`${__dirname}/../../assets/newBM/changeColorBlueTest.bmp`, buffer, function(err){
    if (err) throw err;
  });
};
