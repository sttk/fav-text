'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var escape = fav.text.escape.RegExp;

describe('fav.text.escape["RegExp"]', function() {

  it('Should escape special chars of Regular Expression', function() {
    expect(escape('^')).to.equal('\\^');
    expect(escape('$')).to.equal('\\$');
    expect(escape('\\')).to.equal('\\\\');
    expect(escape('.')).to.equal('\\.');
    expect(escape('*')).to.equal('\\*');
    expect(escape('+')).to.equal('\\+');
    expect(escape('?')).to.equal('\\?');
    expect(escape('(')).to.equal('\\(');
    expect(escape(')')).to.equal('\\)');
    expect(escape('[')).to.equal('\\[');
    expect(escape(']')).to.equal('\\]');
    expect(escape('{')).to.equal('\\{');
    expect(escape('}')).to.equal('\\}');
    expect(escape('|')).to.equal('\\|');

    expect(escape('^$\\.*+?()[]{}|'))
      .to.equal('\\^\\$\\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
  });

  it('Should not escape other characters', function() {
    expect(escape('')).to.equal('');
    expect(escape(' ')).to.equal(' ');
    expect(escape('abcdefghijklmnopqrstuvwxyz'))
      .to.equal('abcdefghijklmnopqrstuvwxyz');
    expect(escape('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
      .to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(escape('1234567890')).to.equal('1234567890');
    expect(escape('~`!@#%&_-=:;"\'<,>/')).to.equal('~`!@#%&_-=:;"\'<,>/');
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('^abc.{1,3}[1-9]*$'))
      .to.equal('\\^abc\\.\\{1,3\\}\\[1-9\\]\\*\\$');
  });
});
