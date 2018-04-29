'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var escape = fav.text.escape.HtmlEntity;

describe('fav.text.escape["HtmlEntity"]', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape(' ')).to.equal('&nbsp;');
    expect(escape('\n')).to.equal('<br/>');

    expect(escape('<>& \n')).to.equal('&lt;&gt;&amp;&nbsp;<br/>');
  });

  it('Should not escape other characters', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;\'",.?/\r';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple&nbsp;&nbsp;&amp;&nbsp;"orange".&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});
