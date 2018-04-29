'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var escape = fav.text.escape.byReplacement({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});

describe('fav.text.escape.byReplacement', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
  });

  it('Should not escape other characters', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape('"')).to.equal('&quot;');
    expect(escape('\'')).to.equal('&apos;');

    expect(escape('<>&"\'')).to.equal('&lt;&gt;&amp;&quot;&apos;');
  });

  it('Should escape only special characters in a string', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;,.?/ \r\n';
    expect(escape(str)).to.equal(str);
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; &quot;orange&quot;.&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});
