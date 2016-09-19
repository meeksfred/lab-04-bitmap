'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.changeColorBlue = function(buffer, bufferObject) {
  var x;
  var blueColorArray = buffer.slice(54, bufferObject.colorOffSet);
  for (x=0;x<blueColorArray.length;x+=4){
    blueColorArray[x] = 255;
    blueColorArray[x+1] = 0;
    blueColorArray[x+2] = 0;
    blueColorArray[x+3] = 0;
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/change-color-blue-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};

exports.changeColorGreen = function(buffer, bufferObject) {
  var y;
  var greenColorArray = buffer.slice(54, bufferObject.colorOffSet);
  for (y=0;y<greenColorArray.length;y+=4){
    greenColorArray[y] = 0;
    greenColorArray[y+1] = 255;
    greenColorArray[y+2] = 0;
    greenColorArray[y+3] = 0;
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/change-color-green-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};

exports.changeColorRed = function(buffer, bufferObject) {
  var z;
  var redColorArray = buffer.slice(54, bufferObject.colorOffSet);
  for (z=0;z<redColorArray.length;z+=4){
    redColorArray[z] = 0;
    redColorArray[z+1] = 0;
    redColorArray[z+2] = 255;
    redColorArray[z+3] = 0;
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/change-color-red-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};

exports.invertColor = function(buffer, bufferObject) {
  var i;
  var invertColorArray = buffer.slice(54, bufferObject.colorOffSet);

  for (i=0;i<invertColorArray.length;i++){
    invertColorArray[i] = 255 - invertColorArray[i];
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/invert-color-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};

exports.grayScaleColor = function(buffer, bufferObject) {
  var c;
  var grayScaleColorArray = buffer.slice(54, bufferObject.colorOffSet);

  for (c=0;c<grayScaleColorArray.length;c+=4){
    var rgbAvg = ((grayScaleColorArray[c] + grayScaleColorArray[c+1] + grayScaleColorArray[c+2]) / 3);

    grayScaleColorArray[c] = rgbAvg;
    grayScaleColorArray[c+1] = rgbAvg;
    grayScaleColorArray[c+2] = rgbAvg;
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/grayscale-color-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};

exports.rgbScaleColor = function(buffer, bufferObject) {
  var d;
  var rgbScaleColorArray = buffer.slice(54, bufferObject.colorOffSet);

  for (d=0;d<rgbScaleColorArray.length;d+=4){
    rgbScaleColorArray[d] = rgbScaleColorArray[d] * .3;
  }
  fs.writeFile(`${__dirname}/../../assets/newBM/rgbScale-color-test.bmp`, buffer, function(err){
    if (err) throw err;
  });
};
