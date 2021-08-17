var myFunc = require('../src/variations');

var isAnagram = myFunc.isAnagram;

var assert = require('assert');
describe('the is Anagram function' , function(){
    it('Correctly determines an Anagram' , function(){
        assert.equal( isAnagram('hello', 'ehllo') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram' , function(){
        assert.equal( isAnagram('testing', 'estting') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram' , function(){
        assert.equal( isAnagram('rain cat', 'cain atr') , 'ANAGRAM!');
    });
});