'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var unique = fav.text.unique;

unique.__array = [];

describe('fav.text.unique : 0 〜 999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(0);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

  it('Should be disable to write `.seqno`', function() {
    var bak = unique.seqno;
    unique.seqno = bak - 10;
    expect(unique.seqno).to.be.equal(bak);
  });

});
