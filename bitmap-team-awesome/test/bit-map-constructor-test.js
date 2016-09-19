'use strict';

const expect = require('chai').expect;
const Bitmap = require('../model/bitmap.js');

describe('module bitmap', function(){
  describe('bitmap object constructor', function(){
    it('should create an object with property colorOffSet', function(){
      expect(Bitmap.colorOffSet).to.eql(1078);
    });
    it('should return undefined for property that does not exist', function(){
      expect(Bitmap.notProperty).to.equal(undefined);
    });
  });
});
