'use strict';

// const buf = require('../lib/bit-file-helper.js');

module.exports = function Bitmap(data){
  var headerData = {};
  var buffer = data;
  console.log(buffer);
  headerData.title = buffer.readUInt32LE(2);

  this.colorOffset = buffer.readUInt32LE(10);
  // this.colorArray = [];

};

Buffer.prototype.changeColorRed = function(){

};



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
