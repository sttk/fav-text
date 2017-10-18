'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var trimLeft = fav.text.trimLeft;

describe('fav.text.trimLeft', function() {

  it('Should remove leading white spaces', function() {
    expect(trimLeft(' a ')).to.equal('a ');
    expect(trimLeft(' 　abc 　 ')).to.equal('abc 　 ');
    expect(trimLeft(' \t abc  \n \t ')).to.equal('abc  \n \t ');
    expect(trimLeft('  a b c   ')).to.equal('a b c   ');
    expect(trimLeft('')).to.equal('');
  });

  it('Should remove leading given characters', function() {
    expect(trimLeft('--^^]]\\abc--^^\\', '-^]\\')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', '^]\\-')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', ']\\-^')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', '\\-^]')).to.equal('abc--^^\\');

    expect(trimLeft('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-'))
      .to.equal('ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-');

    expect(trimLeft('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\'))
      .to.equal('XYZ[\\A\]]');

    expect(trimLeft('', '-')).to.equal('');
  });

});
