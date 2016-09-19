'use strict';

const expect = require('chai').expect;
const constructor = require('../model/bit-map-constructor');

describe('module bitMapConstructor', function(){
  describe('bitMapConstructor object constructor', function(){
    it('should create an object with property colorOffSet', function(){
      expect(constructor.colorOffSet).to.eql(1078);
    });
    it('should return undefined for property that does not exist', function(){
      expect(constructor.notProperty).to.equal(undefined);
    });
  });
});
