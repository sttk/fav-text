'use strict';

var endsWith = require('@fav/text.ends-with');
var escape = require('@fav/text.escape');
var pad = require('@fav/text.pad');
var padLeft = require('@fav/text.pad-left');
var padRight = require('@fav/text.pad-right');
var repeat = require('@fav/text.repeat');
var startsWith = require('@fav/text.starts-with');
var trim = require('@fav/text.trim');
var trimLeft = require('@fav/text.trim-left');
var trimRight = require('@fav/text.trim-right');
var unique = require('@fav/text.unique');

var text = {};

Object.defineProperties(text, {
  endsWith: { enumerable: true, value: endsWith },
  escape: { enumerable: true, value: escape },
  pad: { enumerable: true, value: pad },
  padLeft: { enumerable: true, value: padLeft },
  padRight: { enumerable: true, value: padRight },
  repeat: { enumerable: true, value: repeat },
  startsWith: { enumerable: true, value: startsWith },
  trim: { enumerable: true, value: trim },
  trimLeft: { enumerable: true, value: trimLeft },
  trimRight: { enumerable: true, value: trimRight },
  unique: { enumerable: true, value: unique },
});

module.exports = text;
