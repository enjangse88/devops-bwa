var assert = require('assert');
const calculate = require('../routes/handlers/calculate');

describe('Calculate functions', function() {
  describe('Add function', function() {
    it('should return 5', function() {
      assert.equal(calculate.add(1,4), 5);
    });
  });

  describe('subtract function', function() {
    it('should return 2', function() {
      assert.equal(calculate.subtract(4,2), 2);
    });
  });

  describe('multiply function', function() {
    it('should return 10', function() {
      assert.equal(calculate.multiply(2,5), 10);
    });
  });

  describe('divide function', function() {
    it('should return 6', function() {
      assert.equal(calculate.divide(36,6), 6);
    });
  });
});