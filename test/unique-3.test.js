'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = require('..');

var unique = fav.text.unique;

describe('fav.text.unique : 2000 〜 2999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(2000);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(2000 + i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

});
