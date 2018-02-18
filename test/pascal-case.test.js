'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var pascalCase = fav.text.pascalCase;

describe('fav.text.pascalCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(pascalCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(pascalCase('foo')).to.equal('Foo');
    expect(pascalCase('foobarbaz')).to.equal('Foobarbaz');
    expect(pascalCase('foo123')).to.equal('Foo123');
    expect(pascalCase('foo1bar2baz3')).to.equal('Foo1bar2baz3');
  });

  it('Should convert a pascal case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(pascalCase('FOO')).to.equal('Foo');
    expect(pascalCase('FOOBARBAZ')).to.equal('Foobarbaz');
  });

  it('Should convert a pascal case string when a given string is pascal case',
  function() {
    expect(pascalCase('fooBarBaz')).to.equal('FooBarBaz');
    expect(pascalCase('foo1Bar2Baz3')).to.equal('Foo1Bar2Baz3');

    expect(pascalCase('fOO1BAR2BAZ3')).to.equal('FOO1BAR2BAZ3');
  });

  it('Should convert a pascal case string when a given string is pascal case',
  function() {
    expect(pascalCase('FooBarBaz')).to.equal('FooBarBaz');
    expect(pascalCase('Foo1Bar2Baz3')).to.equal('Foo1Bar2Baz3');

    expect(pascalCase('FOO1BAR2BAZ3')).to.equal('Foo1bar2baz3');
  });

  it('Should convert a pascal case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(pascalCase('foo bar baz')).to.equal('FooBarBaz');
    expect(pascalCase('  FOO  BAR  BAZ ')).to.equal('FooBarBaz');
    expect(pascalCase('Foo Bar Baz   ')).to.equal('FooBarBaz');

    expect(pascalCase(' f o o b a r  ')).to.equal('FOOBAR');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(pascalCase('foo-bar-baz')).to.equal('FooBarBaz');
    expect(pascalCase('--FOO-BAR--BAZ---')).to.equal('FooBarBaz');
    expect(pascalCase('Foo-Bar-Baz---')).to.equal('FooBarBaz');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(pascalCase('foo_bar_baz')).to.equal('FooBarBaz');
    expect(pascalCase('__FOO_BAR__BAZ___')).to.equal('FooBarBaz');
    expect(pascalCase('Foo_Bar_Baz___')).to.equal('FooBarBaz');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(pascalCase('@foo.bar,  baz!')).to.equal('FooBarBaz');
    expect(pascalCase('%FOO&&BAR # # BAZ$$$')).to.equal('FooBarBaz');
    expect(pascalCase('Foo+Bar = Baz')).to.equal('FooBarBaz');
  });
});

