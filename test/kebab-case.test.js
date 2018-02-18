'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var kebabCase = fav.text.kebabCase;

describe('fav.text.kebabCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(kebabCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(kebabCase('foo')).to.equal('foo');
    expect(kebabCase('foobarbaz')).to.equal('foobarbaz');
    expect(kebabCase('foo123')).to.equal('foo123');
    expect(kebabCase('foo1bar2baz3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a kebab case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(kebabCase('FOO')).to.equal('foo');
    expect(kebabCase('FOOBARBAZ')).to.equal('foobarbaz');
  });

  it('Should convert a kebab case string when a given string is kebab case',
  function() {
    expect(kebabCase('fooBarBaz')).to.equal('foo-bar-baz');
    expect(kebabCase('foo1Bar2Baz3')).to.equal('foo1-bar2-baz3');

    expect(kebabCase('fOO1BAR2BAZ3')).to.equal('f-o-o1-b-a-r2-b-a-z3');
  });

  it('Should convert a kebab case string when a given string is kebab case',
  function() {
    expect(kebabCase('FooBarBaz')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo1Bar2Baz3')).to.equal('foo1-bar2-baz3');

    expect(kebabCase('FOO1BAR2BAZ3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a kebab case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(kebabCase('foo bar baz')).to.equal('foo-bar-baz');
    expect(kebabCase('  FOO  BAR  BAZ ')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo Bar Baz   ')).to.equal('foo-bar-baz');

    expect(kebabCase(' f o o b a r  ')).to.equal('f-o-o-b-a-r');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(kebabCase('foo-bar-baz')).to.equal('foo-bar-baz');
    expect(kebabCase('--FOO-BAR--BAZ---')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo-Bar-Baz---')).to.equal('foo-bar-baz');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(kebabCase('foo_bar_baz')).to.equal('foo-bar-baz');
    expect(kebabCase('__FOO_BAR__BAZ___')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo_Bar_Baz___')).to.equal('foo-bar-baz');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(kebabCase('@foo.bar,  baz!')).to.equal('foo-bar-baz');
    expect(kebabCase('%FOO&&BAR # # BAZ$$$')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo+Bar = Baz')).to.equal('foo-bar-baz');
  });
});

