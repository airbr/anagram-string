var myFunc = require('../src/variations.ts');

var isAnagramTest = myFunc.isAnagram;

var assert = require('assert');
describe('Using the is Anagram function from src/variations' , function(){
    it('Correctly determines an Anagram of hello' , function(){
        assert.equal( isAnagramTest('hello', 'ehllo') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of testing' , function(){
        assert.equal( isAnagramTest('testing', 'estting') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of trc aina' , function(){
        assert.equal( isAnagramTest('trc aina', 'cain atr') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of number123' , function(){
        assert.equal( isAnagramTest('number123', '123number') , 'ANAGRAM!');
    });
    it('Correctly determines an Anagram of along the riverways' , function(){
        assert.equal( isAnagramTest('river along the ways', 'along the riverways ') , 'ANAGRAM!');
    });
    it('Correctly fails comparing two different strings' , function(){
        assert.equal( isAnagramTest('one', 'two') , 'NOT ANAGRAM!');
    });
});
