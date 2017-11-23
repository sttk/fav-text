'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var endsWith = fav.text.endsWith;

describe('fav.text.endsWith', function() {

  it('Should return true when 1st and 2nd string is empty', function() {
    expect(endsWith('', '')).to.equal(true);
    expect(endsWith('', '', 0)).to.equal(true);
    expect(endsWith('', '', 1)).to.equal(true);
    expect(endsWith('', '', -1)).to.equal(true);
    expect(endsWith('', '', null)).to.equal(true);
    expect(endsWith('', '', 'a')).to.equal(true);
    expect(endsWith('', '', [])).to.equal(true);
    expect(endsWith('', '', {})).to.equal(true);
    expect(endsWith('', '', NaN)).to.equal(true);
    expect(endsWith('', '', Infinity)).to.equal(true);
  });

  it('Should return false when 1st is empty and 2nd is not empty', function() {
    expect(endsWith('', 'a')).to.equal(false);
    expect(endsWith('', 'a', 0)).to.equal(false);
    expect(endsWith('', 'a', 1)).to.equal(false);
    expect(endsWith('', 'a', -1)).to.equal(false);
    expect(endsWith('', 'a', null)).to.equal(false);
    expect(endsWith('', 'a', 'a')).to.equal(false);
    expect(endsWith('', 'a', [])).to.equal(false);
    expect(endsWith('', 'a', {})).to.equal(false);
    expect(endsWith('', 'a', NaN)).to.equal(false);
    expect(endsWith('', 'a', Infinity)).to.equal(false);
  });

  it('Should return true when 1st is not empty and 2nd is empty', function() {
    expect(endsWith('A', '')).to.equal(true);
    expect(endsWith('A', '', 0)).to.equal(true);
    expect(endsWith('A', '', 1)).to.equal(true);
    expect(endsWith('A', '', -1)).to.equal(true);
    expect(endsWith('A', '', null)).to.equal(true);
    expect(endsWith('A', '', 'a')).to.equal(true);
    expect(endsWith('A', '', [])).to.equal(true);
    expect(endsWith('A', '', {})).to.equal(true);
    expect(endsWith('A', '', NaN)).to.equal(true);
    expect(endsWith('A', '', Infinity)).to.equal(true);
  });

  it('Should return true when 1st ends with 2nd', function() {
    expect(endsWith('abc', 'bc')).to.equal(true);
    expect(endsWith('123', '23')).to.equal(true);
    expect(endsWith('あいう', 'いう')).to.equal(true);
  });

  it('Should return false when 1st does not start iwth 2nd', function() {
    expect(endsWith('abc', 'ab')).to.equal(false);
    expect(endsWith('123', '12')).to.equal(false);
    expect(endsWith('あいう', 'あい')).to.equal(false);
  });

  it('Should return true when 1st up to given index ends with 2nd',
  function() {
    expect(endsWith('abc', 'bc', 3)).to.equal(true);
    expect(endsWith('abc', 'ab', 2)).to.equal(true);
    expect(endsWith('abc', 'a', 1)).to.equal(true);
    expect(endsWith('あいう', 'いう', 3)).to.equal(true);
    expect(endsWith('あいう', 'あい', 2)).to.equal(true);
    expect(endsWith('あいう', 'あ', 1)).to.equal(true);
  });

  it('Should return false when 1st up to given index does not start with 2nd',
  function() {
    expect(endsWith('abc', 'bc', 0)).to.equal(false);
    expect(endsWith('abc', 'bc', 1)).to.equal(false);
    expect(endsWith('abc', 'bc', 2)).to.equal(false);
    expect(endsWith('abc', 'ab', 0)).to.equal(false);
    expect(endsWith('abc', 'ab', 1)).to.equal(false);
    expect(endsWith('abc', 'ab', 3)).to.equal(false);
    expect(endsWith('abc', 'a', 0)).to.equal(false);
    expect(endsWith('abc', 'a', 2)).to.equal(false);
    expect(endsWith('abc', 'a', 3)).to.equal(false);
    expect(endsWith('あいう', 'いう', 0)).to.equal(false);
    expect(endsWith('あいう', 'いう', 1)).to.equal(false);
    expect(endsWith('あいう', 'いう', 2)).to.equal(false);
    expect(endsWith('あいう', 'あい', 0)).to.equal(false);
    expect(endsWith('あいう', 'あい', 1)).to.equal(false);
    expect(endsWith('あいう', 'あい', 3)).to.equal(false);
    expect(endsWith('あいう', 'あ', 0)).to.equal(false);
    expect(endsWith('あいう', 'あ', 2)).to.equal(false);
    expect(endsWith('あいう', 'あ', 3)).to.equal(false);
  });

  it('Should return correct results when argument is string objects',
  function() {
    expect(endsWith('abc', new String('bc'))).to.equal(true);
    expect(endsWith(new String('abc'), 'bc')).to.equal(true);
    expect(endsWith(new String('abc'), new String('bc'))).to.equal(true);

    expect(endsWith('abc', new String('ab'))).to.equal(false);
    expect(endsWith(new String('abc'), 'ab')).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'))).to.equal(false);

    expect(endsWith('abc', new String('ab'), 0)).to.equal(false);
    expect(endsWith(new String('abc'), 'ab', 0)).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'), 0)).to.equal(false);

    expect(endsWith('abc', new String('ab'), 1)).to.equal(false);
    expect(endsWith(new String('abc'), 'ab', 1)).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'), 1)).to.equal(false);

    expect(endsWith('abc', new String('ab'), 2)).to.equal(true);
    expect(endsWith(new String('abc'), 'ab', 2)).to.equal(true);
    expect(endsWith(new String('abc'), new String('ab'), 2)).to.equal(true);
  });
});
