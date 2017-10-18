'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var padRight = fav.text.padRight;

describe('fav.text.padRight', function() {

  it('Should fill padding on right side', function() {
    expect(padRight('abcd', 5, '_')).to.equal('abcd_');
    expect(padRight('abcd', 6, '_')).to.equal('abcd__');
    expect(padRight('abcd', 7, '_')).to.equal('abcd___');
    expect(padRight('abcd', 8, '_')).to.equal('abcd____');
    expect(padRight('abcd', 9, '_')).to.equal('abcd_____');
    expect(padRight('abcd', 10, '_')).to.equal('abcd______');
    expect(padRight('abcd', 11, '_')).to.equal('abcd_______');
    expect(padRight('abcd', 12, '_')).to.equal('abcd________');

    expect(padRight('abcd', 5, '_@')).to.equal('abcd_');
    expect(padRight('abcd', 6, '_@')).to.equal('abcd_@');
    expect(padRight('abcd', 7, '_@')).to.equal('abcd_@_');
    expect(padRight('abcd', 8, '_@')).to.equal('abcd_@_@');
    expect(padRight('abcd', 9, '_@')).to.equal('abcd_@_@_');
    expect(padRight('abcd', 10, '_@')).to.equal('abcd_@_@_@');
    expect(padRight('abcd', 11, '_@')).to.equal('abcd_@_@_@_');
    expect(padRight('abcd', 12, '_@')).to.equal('abcd_@_@_@_@');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(padRight('abcd', 0, '_')).to.equal('abcd');
    expect(padRight('abcd', 1, '_')).to.equal('abcd');
    expect(padRight('abcd', 2, '_')).to.equal('abcd');
    expect(padRight('abcd', 3, '_')).to.equal('abcd');
    expect(padRight('abcd', 4, '_')).to.equal('abcd');

    expect(padRight('abcd', 0, '_@')).to.equal('abcd');
    expect(padRight('abcd', 1, '_@')).to.equal('abcd');
    expect(padRight('abcd', 2, '_@')).to.equal('abcd');
    expect(padRight('abcd', 3, '_@')).to.equal('abcd');
    expect(padRight('abcd', 4, '_@')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(padRight('abcd', 5)).to.equal('abcd ');
    expect(padRight('abcd', 6)).to.equal('abcd  ');
    expect(padRight('abcd', 7)).to.equal('abcd   ');
    expect(padRight('abcd', 8)).to.equal('abcd    ');
    expect(padRight('abcd', 9)).to.equal('abcd     ');
    expect(padRight('abcd', 10)).to.equal('abcd      ');
    expect(padRight('abcd', 11)).to.equal('abcd       ');
    expect(padRight('abcd', 12)).to.equal('abcd        ');
  });

  it('Should pad white spaces when `padding` is an empty string', function() {
    expect(padRight('abcd', 0, '')).to.equal('abcd');
    expect(padRight('abcd', 1, '')).to.equal('abcd');
    expect(padRight('abcd', 2, '')).to.equal('abcd');
    expect(padRight('abcd', 3, '')).to.equal('abcd');
    expect(padRight('abcd', 4, '')).to.equal('abcd');
    expect(padRight('abcd', 5, '')).to.equal('abcd ');
    expect(padRight('abcd', 6, '')).to.equal('abcd  ');
    expect(padRight('abcd', 7, '')).to.equal('abcd   ');
    expect(padRight('abcd', 8, '')).to.equal('abcd    ');
    expect(padRight('abcd', 9, '')).to.equal('abcd     ');
    expect(padRight('abcd', 10, '')).to.equal('abcd      ');
    expect(padRight('abcd', 11, '')).to.equal('abcd       ');
    expect(padRight('abcd', 12, '')).to.equal('abcd        ');
  });

  it('Should return source when `length` is not specified', function() {
    expect(padRight('')).to.equal('');
    expect(padRight('a')).to.equal('a');
    expect(padRight('abcd')).to.equal('abcd');
  });
});
