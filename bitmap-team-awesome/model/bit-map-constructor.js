'use strict';

const buffer = require('../lib/bit-file-helper.js');

module.exports = function Bitmap(buffer, object){
  this.buffer = buffer;
  this.colorOffset = buffer.readUInt32LE(10);
  this.colorArray =
}

Bitmap.prototype.changeColorRed = function(){
  
}



// bitmap.changeColorRed = function(){
//   var x,i;
//   for (i=54;i<=buffer.offset;i+=4){
//     for (x=i;x<i+4;x++){
//       // data.slice()
//       newColorArray.push(data.readUInt8(x));
//
//       // console.log(`${i},${x}: ${data.readUInt8(x)}`);
//     }
//   }
};
