'use strict';

const bitFileHelper = require('../lib/bit-file-helper');
const expect = require('chai').expect;

describe('module bitFileHelper', function(){
  describe('testing bitFileHelper() read file', function(){
    it('should return an error', function(){
      bitFileHelper(`${__dirname}/../../assets/notBM.bmp`, function(err){
        expect(!!err).to.equal(true);
      });
    });

    it('should read in buffer and create new object', function(){
      bitFileHelper(function(bitmap, bitMapObject){
        expect(bitmap).to.be.true;
        expect(bitMapObject).to.have.property(bitMapObject.colorOffSet);
      });
    });
  });
});
