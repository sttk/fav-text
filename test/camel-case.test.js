'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var camelCase = fav.text.camelCase;

describe('fav.text.camelCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(camelCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(camelCase('foo')).to.equal('foo');
    expect(camelCase('foobarbaz')).to.equal('foobarbaz');
    expect(camelCase('foo123')).to.equal('foo123');
    expect(camelCase('foo1bar2baz3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a lower case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(camelCase('FOO')).to.equal('foo');
    expect(camelCase('FOOBARBAZ')).to.equal('foobarbaz');
  });

  it('Should convert a camel case string when a given string is camel case',
  function() {
    expect(camelCase('fooBarBaz')).to.equal('fooBarBaz');
    expect(camelCase('foo1Bar2Baz3')).to.equal('foo1Bar2Baz3');

    expect(camelCase('fOO1BAR2BAZ3')).to.equal('fOO1BAR2BAZ3');
  });

  it('Should convert a camel case string when a given string is pascal case',
  function() {
    expect(camelCase('FooBarBaz')).to.equal('fooBarBaz');
    expect(camelCase('Foo1Bar2Baz3')).to.equal('foo1Bar2Baz3');

    expect(camelCase('FOO1BAR2BAZ3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a camel case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(camelCase('foo bar baz')).to.equal('fooBarBaz');
    expect(camelCase('  FOO  BAR  BAZ ')).to.equal('fooBarBaz');
    expect(camelCase('Foo Bar Baz   ')).to.equal('fooBarBaz');

    expect(camelCase(' f o o b a r  ')).to.equal('fOOBAR');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(camelCase('foo-bar-baz')).to.equal('fooBarBaz');
    expect(camelCase('--FOO-BAR--BAZ---')).to.equal('fooBarBaz');
    expect(camelCase('Foo-Bar-Baz---')).to.equal('fooBarBaz');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(camelCase('foo_bar_baz')).to.equal('fooBarBaz');
    expect(camelCase('__FOO_BAR__BAZ___')).to.equal('fooBarBaz');
    expect(camelCase('Foo_Bar_Baz___')).to.equal('fooBarBaz');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(camelCase('@foo.bar,  baz!')).to.equal('fooBarBaz');
    expect(camelCase('%FOO&&BAR # # BAZ$$$')).to.equal('fooBarBaz');
    expect(camelCase('Foo+Bar = Baz')).to.equal('fooBarBaz');
  });
});

