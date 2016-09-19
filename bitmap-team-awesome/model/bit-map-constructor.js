'use strict';

const buffer = require('../lib/bit-file-helper.js');
const fs = require('fs');
module.exports = function Bitmap(data){
  var headerData = {};
  var buffer = data;
  console.log(buffer);
  headerData.title = buffer.readUInt32LE(2);
};

exports.changeColorBlue = function(buffer, bufferObject) {
  var blueColorArray = buffer.slice(54, bufferObject.colorOffSet);
  console.log('object', bufferObject);

  module.exports.changeColorBlue = function(){
    for(var i=0; i<blueColorArray.length; i+=4) {
      blueColorArray[0] = 0;
      blueColorArray[i+1] = 255;
      blueColorArray[i+2] = 0;
      blueColorArray[i+3] = 0;
    }
  };
  console.log('buff slice', blueColorArray);
};

fs.writeFile(`${__dirname}/../../assets/new-bit-map/change-color-test-blue.bmp`, buffer, function(){
  // if (err) throw err;
  console.log('INSIDE THE FS.WRITE-FILE.');
});
