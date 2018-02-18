'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.text = require('..');

var constantCase = fav.text.constantCase;

describe('fav.text.constantCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(constantCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(constantCase('foo')).to.equal('FOO');
    expect(constantCase('foobarbaz')).to.equal('FOOBARBAZ');
    expect(constantCase('foo123')).to.equal('FOO123');
    expect(constantCase('foo1bar2baz3')).to.equal('FOO1BAR2BAZ3');
  });

  it('Should convert a constant case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(constantCase('FOO')).to.equal('FOO');
    expect(constantCase('FOOBARBAZ')).to.equal('FOOBARBAZ');
  });

  it('Should convert a constant case string when a given string is constant ' +
  'case', function() {
    expect(constantCase('fooBarBaz')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('foo1Bar2Baz3')).to.equal('FOO1_BAR2_BAZ3');

    expect(constantCase('fOO1BAR2BAZ3')).to.equal('F_O_O1_B_A_R2_B_A_Z3');
  });

  it('Should convert a constant case string when a given string is constant ' +
  'case', function() {
    expect(constantCase('FooBarBaz')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('Foo1Bar2Baz3')).to.equal('FOO1_BAR2_BAZ3');

    expect(constantCase('FOO1BAR2BAZ3')).to.equal('FOO1BAR2BAZ3');
  });

  it('Should convert a constant case string when a give string is separated ' +
  '\n\tby white spaces', function() {
    expect(constantCase('foo bar baz')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('  FOO  BAR  BAZ ')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('Foo Bar Baz   ')).to.equal('FOO_BAR_BAZ');

    expect(constantCase(' f o o b a r  ')).to.equal('F_O_O_B_A_R');
  });

  it('Should convert a constant case string when a given string is separated' +
  '\n\tby hyphens', function() {
    expect(constantCase('foo-bar-baz')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('--FOO-BAR--BAZ---')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('Foo-Bar-Baz---')).to.equal('FOO_BAR_BAZ');
  });

  it('Should convert a constant case string when a given string is separated' +
  '\n\tby underscore', function() {
    expect(constantCase('foo_bar_baz')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('__FOO_BAR__BAZ___')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('Foo_Bar_Baz___')).to.equal('FOO_BAR_BAZ');
  });

  it('Should convert a constant case string when a given string is separated' +
  '\n\tby non-alphanumeric chars', function() {
    expect(constantCase('@foo.bar,  baz!')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('%FOO&&BAR # # BAZ$$$')).to.equal('FOO_BAR_BAZ');
    expect(constantCase('Foo+Bar = Baz')).to.equal('FOO_BAR_BAZ');
  });
});

