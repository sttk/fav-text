'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var escape = fav.text.escape.byPreposition('\\', '$%()*.');

describe('fav.text.escape.byPreposition', function() {

  it('Should escape special chars by preposition of 1st arg', function() {
    expect(escape('$%()*.\\')).to.equal('\\$\\%\\(\\)\\*\\.\\\\');
  });

  it('Should not escape other characters', function() {
    var str = 'ABC!@&{}';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('aaa $(bbb) %ccc% ddd*.eee\\fff')).to.equal(
      'aaa \\$\\(bbb\\) \\%ccc\\% ddd\\*\\.eee\\\\fff');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });

  it('Should escape only chars which are same with 1st arg when 2nd arg is ' +
  'not specified', function() {
    var escape2 = fav.text.escape.byPreposition('%');
    expect(escape2('a$&aa %bbb% ccc')).to.equal('a$&aa %%bbb%% ccc');
  });
});
