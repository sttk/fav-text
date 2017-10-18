'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var trim = fav.text.trim;

describe('fav.text.trim', function() {

  it('Should remove leading and trailng white spaces', function() {
    expect(trim(' a ')).to.equal('a');
    expect(trim(' 　abc 　 ')).to.equal('abc');
    expect(trim(' \t abc 　\n\r ')).to.equal('abc');
    expect(trim('  a b c  ')).to.equal('a b c');
    expect(trim('')).to.equal('');
  });

  it('Should remove leading and trailng given characters', function() {
    expect(trim('--^^]]\\abc--^^\\', '-^]\\')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', '^]\\-')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', ']\\-^')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', '\\-^]')).to.equal('abc');

    expect(trim('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-'))
      .to.equal('ABC');

    expect(trim('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\')).to.equal('XYZ');

    expect(trim('', '-')).to.equal('');
  });
});

