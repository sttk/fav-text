(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).text = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var escape = require('@fav/text.escape');
var pad = require('@fav/text.pad');
var padLeft = require('@fav/text.pad-left');
var padRight = require('@fav/text.pad-right');
var repeat = require('@fav/text.repeat');
var trim = require('@fav/text.trim');
var trimLeft = require('@fav/text.trim-left');
var trimRight = require('@fav/text.trim-right');
var unique = require('@fav/text.unique');

var text = {};

Object.defineProperties(text, {
  escape: { enumerable: true, value: escape },
  pad: { enumerable: true, value: pad },
  padLeft: { enumerable: true, value: padLeft },
  padRight: { enumerable: true, value: padRight },
  repeat: { enumerable: true, value: repeat },
  trim: { enumerable: true, value: trim },
  trimLeft: { enumerable: true, value: trimLeft },
  trimRight: { enumerable: true, value: trimRight },
  unique: { enumerable: true, value: unique },
});

module.exports = text;

},{"@fav/text.escape":2,"@fav/text.pad":7,"@fav/text.pad-left":5,"@fav/text.pad-right":6,"@fav/text.repeat":8,"@fav/text.trim":11,"@fav/text.trim-left":9,"@fav/text.trim-right":10,"@fav/text.unique":12}],2:[function(require,module,exports){
'use strict';

var regexp = require('./lib/regexp');
var regexpCharClass = require('./lib/regexp-charclass');

var escape = {};

Object.defineProperties(escape, {
  RegExp: { enumerable: true, value: regexp },
  RegExpCharClass: { enumerable: true, value: regexpCharClass },
});

module.exports = escape;

},{"./lib/regexp":4,"./lib/regexp-charclass":3}],3:[function(require,module,exports){
'use strict';

function regexpCharClass(source) {
  return source.replace(/([\-\^\]\\])/g, '\\$&');
}

module.exports = regexpCharClass;

},{}],4:[function(require,module,exports){
'use strict';

function regexp(source) {
  return source.replace(/([\\^$.*+?()[\]{}|])/g, '\\$&');
}

module.exports = regexp;

},{}],5:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padLeft(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return pads + source;
}

module.exports = padLeft;

},{"@fav/text.repeat":8}],6:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padRight(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return source + pads;
}

module.exports = padRight;

},{"@fav/text.repeat":8}],7:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function pad(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var padsFull = repeat(padding, padsNum);
  var padsHalfPos = Math.floor(padsLen / 2);

  return (
    padsFull.slice(0, padsHalfPos) +
    source +
    padsFull.slice(0, padsLen - padsHalfPos)
  );
}

module.exports = pad;

},{"@fav/text.repeat":8}],8:[function(require,module,exports){
'use strict';

function repeat(source, ntimes) {
  if (ntimes < 1) {
    return '';
  }

  var unitlen = source.length;
  var halftime = Math.ceil(ntimes / 2);

  for (var i = 1; i < halftime; i += i) {
    source += source;
  }

  return source + source.slice(0, (ntimes - i) * unitlen);;
}

module.exports = repeat;

},{}],9:[function(require,module,exports){
'use strict';

var escape = require('@fav/text.escape').RegExpCharClass;

function trimLeft(source, chars) {
  if (chars == null) {
    return source.replace(/^\s+/g, '');
  }

  chars = escape(chars);

  var leadingRe = new RegExp('^[' + chars + ']+');

  return source.replace(leadingRe, '');
}

module.exports = trimLeft;

},{"@fav/text.escape":2}],10:[function(require,module,exports){
'use strict';

var escape = require('@fav/text.escape').RegExpCharClass;

function trimRight(source, chars) {
  if (chars == null) {
    return source.replace(/\s+$/g, '');
  }

  chars = escape(chars);

  var trailingRe = new RegExp('[' + chars + ']+$');

  return source.replace(trailingRe, '');
}

module.exports = trimRight;

},{"@fav/text.escape":2}],11:[function(require,module,exports){
'use strict';

var escape = require('@fav/text.escape').RegExpCharClass;

function trim(source, chars) {
  if (chars == null) {
    return source.trim(chars);
  }

  chars = escape(chars);

  var leadingRe = new RegExp('^[' + chars + ']+');
  var trailingRe = new RegExp('[' + chars + ']+$');

  return source.replace(leadingRe, '').replace(trailingRe, '');
}

module.exports = trim;

},{"@fav/text.escape":2}],12:[function(require,module,exports){
'use strict';

var cyclicIncrement = require('./lib/cyclic-increment');

var seqNo = 0;;

function unique() {
  var n = seqNo;
  seqNo = cyclicIncrement(n);
  return new Date().getTime().toString(36) + n.toString(36);
}

Object.defineProperty(unique, 'seqno', {
  set: function() {},
  get: function() { return seqNo; },
});

module.exports = unique;

},{"./lib/cyclic-increment":13}],13:[function(require,module,exports){
'use strict';

/* istanbul ignore next */
var maxSeqNo = Number.MAX_SAFE_INTEGER || 9007199254740991;

function cyclicIncrement(value) {
  return value < maxSeqNo ? value + 1 : 0;
}

module.exports = cyclicIncrement;

},{}]},{},[1])(1)
});