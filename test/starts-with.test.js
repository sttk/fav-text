'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var startsWith = fav.text.startsWith;

describe('fav.text.startsWith', function() {

  it('Should return true when 1st and 2nd string is empty', function() {
    expect(startsWith('', '')).to.equal(true);
    expect(startsWith('', '', 0)).to.equal(true);
    expect(startsWith('', '', 1)).to.equal(true);
    expect(startsWith('', '', -1)).to.equal(true);
    expect(startsWith('', '', null)).to.equal(true);
    expect(startsWith('', '', 'a')).to.equal(true);
    expect(startsWith('', '', [])).to.equal(true);
    expect(startsWith('', '', {})).to.equal(true);
    expect(startsWith('', '', NaN)).to.equal(true);
    expect(startsWith('', '', Infinity)).to.equal(true);
  });

  it('Should return false when 1st is empty and 2nd is not empty', function() {
    expect(startsWith('', 'a')).to.equal(false);
    expect(startsWith('', 'a', 0)).to.equal(false);
    expect(startsWith('', 'a', 1)).to.equal(false);
    expect(startsWith('', 'a', -1)).to.equal(false);
    expect(startsWith('', 'a', null)).to.equal(false);
    expect(startsWith('', 'a', 'a')).to.equal(false);
    expect(startsWith('', 'a', [])).to.equal(false);
    expect(startsWith('', 'a', {})).to.equal(false);
    expect(startsWith('', 'a', NaN)).to.equal(false);
    expect(startsWith('', 'a', Infinity)).to.equal(false);
  });

  it('Should return true when 1st is not empty and 2nd is empty', function() {
    expect(startsWith('A', '')).to.equal(true);
    expect(startsWith('A', '', 0)).to.equal(true);
    expect(startsWith('A', '', 1)).to.equal(true);
    expect(startsWith('A', '', -1)).to.equal(true);
    expect(startsWith('A', '', null)).to.equal(true);
    expect(startsWith('A', '', 'a')).to.equal(true);
    expect(startsWith('A', '', [])).to.equal(true);
    expect(startsWith('A', '', {})).to.equal(true);
    expect(startsWith('A', '', NaN)).to.equal(true);
    expect(startsWith('A', '', Infinity)).to.equal(true);
  });

  it('Should return true when 1st starts with 2nd', function() {
    expect(startsWith('abc', 'ab')).to.equal(true);
    expect(startsWith('123', '12')).to.equal(true);
    expect(startsWith('あいう', 'あい')).to.equal(true);
  });

  it('Should return false when 1st does not start with 2nd', function() {
    expect(startsWith('abc', 'bc')).to.equal(false);
    expect(startsWith('123', '23')).to.equal(false);
    expect(startsWith('あいう', 'いう')).to.equal(false);
  });

  it('Should return true when 1st from given index starts with 2nd',
  function() {
    expect(startsWith('abc', 'ab', 0)).to.equal(true);
    expect(startsWith('abc', 'bc', 1)).to.equal(true);
    expect(startsWith('abc', 'c', 2)).to.equal(true);
    expect(startsWith('123', '12', 0)).to.equal(true);
    expect(startsWith('123', '23', 1)).to.equal(true);
    expect(startsWith('123', '3', 2)).to.equal(true);
    expect(startsWith('あいう', 'あい', 0)).to.equal(true);
    expect(startsWith('あいう', 'いう', 1)).to.equal(true);
    expect(startsWith('あいう', 'う', 2)).to.equal(true);
    expect(startsWith('abc', 'ab', -1)).to.equal(true);
    expect(startsWith('123', '12', -1)).to.equal(true);
    expect(startsWith('あいう', 'あい', -1)).to.equal(true);
  });

  it('Should return false when 1st from given index does not start with 2nd',
  function() {
    expect(startsWith('abc', 'ab', 1)).to.equal(false);
    expect(startsWith('abc', 'ab', 2)).to.equal(false);
    expect(startsWith('abc', 'ab', 3)).to.equal(false);
    expect(startsWith('abc', 'bc', 0)).to.equal(false);
    expect(startsWith('abc', 'bc', 2)).to.equal(false);
    expect(startsWith('abc', 'bc', 3)).to.equal(false);
    expect(startsWith('abc', 'c', 0)).to.equal(false);
    expect(startsWith('abc', 'c', 1)).to.equal(false);
    expect(startsWith('abc', 'c', 3)).to.equal(false);
    expect(startsWith('123', '12', 1)).to.equal(false);
    expect(startsWith('123', '12', 2)).to.equal(false);
    expect(startsWith('123', '12', 3)).to.equal(false);
    expect(startsWith('123', '23', 0)).to.equal(false);
    expect(startsWith('123', '23', 2)).to.equal(false);
    expect(startsWith('123', '23', 3)).to.equal(false);
    expect(startsWith('123', '3', 0)).to.equal(false);
    expect(startsWith('123', '3', 1)).to.equal(false);
    expect(startsWith('123', '3', 3)).to.equal(false);
    expect(startsWith('あいう', 'あい', 1)).to.equal(false);
    expect(startsWith('あいう', 'あい', 2)).to.equal(false);
    expect(startsWith('あいう', 'あい', 3)).to.equal(false);
    expect(startsWith('あいう', 'いう', 0)).to.equal(false);
    expect(startsWith('あいう', 'いう', 2)).to.equal(false);
    expect(startsWith('あいう', 'いう', 3)).to.equal(false);
    expect(startsWith('あいう', 'う', 0)).to.equal(false);
    expect(startsWith('あいう', 'う', 1)).to.equal(false);
    expect(startsWith('あいう', 'う', 3)).to.equal(false);
  });

  it('Should return correct results when argument is string objects',
  function() {
    expect(startsWith('abc', new String('ab'))).to.equal(true);
    expect(startsWith(new String('abc'), 'ab')).to.equal(true);
    expect(startsWith(new String('abc'), new String('ab'))).to.equal(true);

    expect(startsWith('abc', new String('bc'))).to.equal(false);
    expect(startsWith(new String('abc'), 'bc')).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'))).to.equal(false);

    expect(startsWith('abc', new String('bc'), 0)).to.equal(false);
    expect(startsWith(new String('abc'), 'bc', 0)).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'), 0)).to.equal(false);

    expect(startsWith('abc', new String('bc'), 1)).to.equal(true);
    expect(startsWith(new String('abc'), 'bc', 1)).to.equal(true);
    expect(startsWith(new String('abc'), new String('bc'), 1)).to.equal(true);

    expect(startsWith('abc', new String('bc'), 2)).to.equal(false);
    expect(startsWith(new String('abc'), 'bc', 2)).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'), 2)).to.equal(false);
  });
});
