var myFunc = require('../src/variations.ts');

var isAnagramTest = myFunc.isAnagram;

var assert = require('assert');
describe('Using the is Anagram function from src/variations' , function(){
    it('Correctly determines an Anagram of hello' , function(){
        assert.equal( isAnagramTest('hello', 'ehllo') , true);
    });
    it('Correctly determines an Anagram of testing' , function(){
        assert.equal( isAnagramTest('testing', 'estting') , true);
    });
    it('Correctly determines an Anagram of trc aina' , function(){
        assert.equal( isAnagramTest('trc aina', 'cain atr') , true);
    });
    it('Correctly determines an Anagram of number123' , function(){
        assert.equal( isAnagramTest('number123', '123number') , true);
    });
    it('Correctly determines an Anagram of along the riverways' , function(){
        assert.equal( isAnagramTest('river along the ways', 'along the riverways ') , true);
    });
    it('Correctly fails comparing two different strings' , function(){
        assert.equal( isAnagramTest('one', 'two') , false);
    });
});
