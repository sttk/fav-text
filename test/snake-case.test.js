'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var snakeCase = fav.text.snakeCase;

describe('fav.text.snakeCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(snakeCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(snakeCase('foo')).to.equal('foo');
    expect(snakeCase('foobarbaz')).to.equal('foobarbaz');
    expect(snakeCase('foo123')).to.equal('foo123');
    expect(snakeCase('foo1bar2baz3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a snake case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(snakeCase('FOO')).to.equal('foo');
    expect(snakeCase('FOOBARBAZ')).to.equal('foobarbaz');
  });

  it('Should convert a snake case string when a given string is snake case',
  function() {
    expect(snakeCase('fooBarBaz')).to.equal('foo_bar_baz');
    expect(snakeCase('foo1Bar2Baz3')).to.equal('foo1_bar2_baz3');

    expect(snakeCase('fOO1BAR2BAZ3')).to.equal('f_o_o1_b_a_r2_b_a_z3');
  });

  it('Should convert a snake case string when a given string is snake case',
  function() {
    expect(snakeCase('FooBarBaz')).to.equal('foo_bar_baz');
    expect(snakeCase('Foo1Bar2Baz3')).to.equal('foo1_bar2_baz3');

    expect(snakeCase('FOO1BAR2BAZ3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a snake case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(snakeCase('foo bar baz')).to.equal('foo_bar_baz');
    expect(snakeCase('  FOO  BAR  BAZ ')).to.equal('foo_bar_baz');
    expect(snakeCase('Foo Bar Baz   ')).to.equal('foo_bar_baz');

    expect(snakeCase(' f o o b a r  ')).to.equal('f_o_o_b_a_r');
  });

  it('Should convert a snake case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(snakeCase('foo-bar-baz')).to.equal('foo_bar_baz');
    expect(snakeCase('--FOO-BAR--BAZ---')).to.equal('foo_bar_baz');
    expect(snakeCase('Foo-Bar-Baz---')).to.equal('foo_bar_baz');
  });

  it('Should convert a snake case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(snakeCase('foo_bar_baz')).to.equal('foo_bar_baz');
    expect(snakeCase('__FOO_BAR__BAZ___')).to.equal('foo_bar_baz');
    expect(snakeCase('Foo_Bar_Baz___')).to.equal('foo_bar_baz');
  });

  it('Should convert a snake case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(snakeCase('@foo.bar,  baz!')).to.equal('foo_bar_baz');
    expect(snakeCase('%FOO&&BAR # # BAZ$$$')).to.equal('foo_bar_baz');
    expect(snakeCase('Foo+Bar = Baz')).to.equal('foo_bar_baz');
  });

});

