'use strict';

const bitFileHelper = require('./lib/bit-file-helper.js');

bitFileHelper.read(function(data){
  console.log('work', data);
});
