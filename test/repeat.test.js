'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var repeat = fav.text.repeat;

describe('fav.text.repeat', function() {

  it('Should get repeated character', function() {
    expect(repeat('a', 0)).to.equal('');
    expect(repeat('a', 1)).to.equal('a');
    expect(repeat('a', 2)).to.equal('aa');
    expect(repeat('a', 3)).to.equal('aaa');
    expect(repeat('a', 4)).to.equal('aaaa');
    expect(repeat('a', 5)).to.equal('aaaaa');
    expect(repeat('a', 6)).to.equal('aaaaaa');

    for (var i = 0; i < 1000; i++) {
      expect(repeat('a', i)).to.equal(repeatSimply('a', i));
    }
  });

  it('Should get repeated string', function() {
    expect(repeat('abc', 0)).to.equal('');
    expect(repeat('abc', 1)).to.equal('abc');
    expect(repeat('abc', 2)).to.equal('abcabc');
    expect(repeat('abc', 3)).to.equal('abcabcabc');
    expect(repeat('abc', 4)).to.equal('abcabcabcabc');
    expect(repeat('abc', 5)).to.equal('abcabcabcabcabc');
    expect(repeat('abc', 6)).to.equal('abcabcabcabcabcabc');

    for (var i = 0; i < 1000; i++) {
      expect(repeat('abc', i)).to.equal(repeatSimply('abc', i));
    }
  });

  it('Should get repeated empty string', function() {
    expect(repeat('', 0)).to.equal('');
    expect(repeat('', 1)).to.equal('');
    expect(repeat('', 2)).to.equal('');
    expect(repeat('', 3)).to.equal('');
    expect(repeat('', 4)).to.equal('');
    expect(repeat('', 5)).to.equal('');
    expect(repeat('', 6)).to.equal('');
  });

  it('Should repeat normally when the arguments are a String object and ' +
  '\n\ta Number object', function() {
    expect(repeat(new String('abc'), new Number(0))).to.equal('');
    expect(repeat(new String('abc'), new Number(1))).to.equal('abc');
    expect(repeat(new String('abc'), new Number(2))).to.equal('abcabc');
    expect(repeat(new String('abc'), new Number(3))).to.equal('abcabcabc');
  });
});

function repeatSimply(text, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += text;
  }
  return result;
}
