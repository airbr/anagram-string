var myFunc = require('../src/variations');

var isAnagram = myFunc.isAnagram;

var assert = require('assert');
describe('Using the is Anagram function from src/variations' , function(){
    it('Correctly determines an Anagram of hello' , function(){
        assert.equal( isAnagram('hello', 'ehllo') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of testing' , function(){
        assert.equal( isAnagram('testing', 'estting') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of trc aina' , function(){
        assert.equal( isAnagram('trc aina', 'cain atr') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of number123' , function(){
        assert.equal( isAnagram('number123', '123number') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of along the riverways' , function(){
        assert.equal( isAnagram('river along the ways', 'along the riverways ') , 'ANAGRAM!');
    });
    it('Correctly fails comparing two different strings' , function(){
        assert.equal( isAnagram('one', 'two') , 'NOT ANAGRAM!');
    });
});
