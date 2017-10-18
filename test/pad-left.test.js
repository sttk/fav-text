'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var padLeft = fav.text.padLeft;

describe('fav.text.padLeft', function() {

  it('Should fill padding on left side', function() {
    expect(padLeft('abcd', 5, '_')).to.equal('_abcd');
    expect(padLeft('abcd', 6, '_')).to.equal('__abcd');
    expect(padLeft('abcd', 7, '_')).to.equal('___abcd');
    expect(padLeft('abcd', 8, '_')).to.equal('____abcd');
    expect(padLeft('abcd', 9, '_')).to.equal('_____abcd');
    expect(padLeft('abcd', 10, '_')).to.equal('______abcd');
    expect(padLeft('abcd', 11, '_')).to.equal('_______abcd');
    expect(padLeft('abcd', 12, '_')).to.equal('________abcd');

    expect(padLeft('abcd', 5, '_@')).to.equal('_abcd');
    expect(padLeft('abcd', 6, '_@')).to.equal('_@abcd');
    expect(padLeft('abcd', 7, '_@')).to.equal('_@_abcd');
    expect(padLeft('abcd', 8, '_@')).to.equal('_@_@abcd');
    expect(padLeft('abcd', 9, '_@')).to.equal('_@_@_abcd');
    expect(padLeft('abcd', 10, '_@')).to.equal('_@_@_@abcd');
    expect(padLeft('abcd', 11, '_@')).to.equal('_@_@_@_abcd');
    expect(padLeft('abcd', 12, '_@')).to.equal('_@_@_@_@abcd');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(padLeft('abcd', 0, '_')).to.equal('abcd');
    expect(padLeft('abcd', 1, '_')).to.equal('abcd');
    expect(padLeft('abcd', 2, '_')).to.equal('abcd');
    expect(padLeft('abcd', 3, '_')).to.equal('abcd');
    expect(padLeft('abcd', 4, '_')).to.equal('abcd');

    expect(padLeft('abcd', 0, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 1, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 2, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 3, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 4, '_@')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(padLeft('abcd', 5)).to.equal(' abcd');
    expect(padLeft('abcd', 6)).to.equal('  abcd');
    expect(padLeft('abcd', 7)).to.equal('   abcd');
    expect(padLeft('abcd', 8)).to.equal('    abcd');
    expect(padLeft('abcd', 9)).to.equal('     abcd');
    expect(padLeft('abcd', 10)).to.equal('      abcd');
    expect(padLeft('abcd', 11)).to.equal('       abcd');
    expect(padLeft('abcd', 12)).to.equal('        abcd');
  });

  it('Should pad white spaces when `padding` is an empty string', function() {
    expect(padLeft('abcd', 0, '')).to.equal('abcd');
    expect(padLeft('abcd', 1, '')).to.equal('abcd');
    expect(padLeft('abcd', 2, '')).to.equal('abcd');
    expect(padLeft('abcd', 3, '')).to.equal('abcd');
    expect(padLeft('abcd', 4, '')).to.equal('abcd');
    expect(padLeft('abcd', 5, '')).to.equal(' abcd');
    expect(padLeft('abcd', 6, '')).to.equal('  abcd');
    expect(padLeft('abcd', 7, '')).to.equal('   abcd');
    expect(padLeft('abcd', 8, '')).to.equal('    abcd');
    expect(padLeft('abcd', 9, '')).to.equal('     abcd');
    expect(padLeft('abcd', 10, '')).to.equal('      abcd');
    expect(padLeft('abcd', 11, '')).to.equal('       abcd');
    expect(padLeft('abcd', 12, '')).to.equal('        abcd');
  });

  it('Should return source when `length` is not specified', function() {
    expect(padLeft('')).to.equal('');
    expect(padLeft('a')).to.equal('a');
    expect(padLeft('abcd')).to.equal('abcd');
  });
});

