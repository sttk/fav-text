'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var trimRight = fav.text.trimRight;

describe('fav.text.trimRight', function() {

  it('Should remove trailing white spaces', function() {
    expect(trimRight(' a ')).to.equal(' a');
    expect(trimRight(' 　abc 　 ')).to.equal(' 　abc');
    expect(trimRight(' \t abc  \n \t ')).to.equal(' \t abc');
    expect(trimRight('  a b c   ')).to.equal('  a b c');
    expect(trimRight('')).to.equal('');
  });

  it('SHould remove trailing given characters', function() {
    expect(trimRight('--^^]]\\abc--^^\\', '-^]\\')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', '^]\\-')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', ']\\-^')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', '\\-^]')).to.equal('--^^]]\\abc');

    expect(trimRight('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-',
      '\\*.+?|{}()[]$^-')).to.equal('\\*.+?|{}()[]^$-ABC');

    expect(trimRight('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\'))
      .to.equal('[1-3][^BC]XYZ');

    expect(trimRight('', '-')).to.equal('');
  });

});

