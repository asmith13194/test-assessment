let assert = require('assert');
let vowelCount = require('./index.js')

describe('Vowel Count', function() {
    it('should return total number of vowels in a string', function() {
      assert.equal(2, vowelCount('hello'));
    });
    it('should return "invalid" if input does not equal a string', function() {
      assert.equal('invalid', vowelCount(3))
    })
    it('should return "No Vowels!" if input contains no vowels', function() {
      assert.equal('No Vowels!', vowelCount('myth'))
    })
});
