(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).text = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"@fav/text.ends-with":2,"@fav/text.escape":3,"@fav/text.pad":10,"@fav/text.pad-left":6,"@fav/text.pad-right":8,"@fav/text.repeat":11,"@fav/text.starts-with":12,"@fav/text.trim":15,"@fav/text.trim-left":13,"@fav/text.trim-right":14,"@fav/text.unique":16}],2:[function(require,module,exports){
'use strict';

function endsWith(string, target, endIndex) {
  endIndex = Math.max(endIndex, 0);
  if (endIndex !== endIndex) { // NaN
    endIndex = string.length;
  }

  var startIndex = endIndex - target.length;
  if (startIndex >= 0) {
    /* eslint eqeqeq: off */
    return string.slice(startIndex, endIndex) == target;
  }

  return false;
}

module.exports = endsWith;

},{}],3:[function(require,module,exports){
'use strict';

var regexp = require('./lib/regexp');
var regexpCharClass = require('./lib/regexp-charclass');

var escape = {};

Object.defineProperties(escape, {
  RegExp: { enumerable: true, value: regexp },
  RegExpCharClass: { enumerable: true, value: regexpCharClass },
});

module.exports = escape;

},{"./lib/regexp":5,"./lib/regexp-charclass":4}],4:[function(require,module,exports){
'use strict';

function regexpCharClass(source) {
  return source.replace(/([\-\^\]\\])/g, '\\$&');
}

module.exports = regexpCharClass;

},{}],5:[function(require,module,exports){
'use strict';

function regexp(source) {
  return source.replace(/([\\^$.*+?()[\]{}|])/g, '\\$&');
}

module.exports = regexp;

},{}],6:[function(require,module,exports){
'use strict';

var padLeft;

/* istanbul ignore if */
if (!Boolean(String.prototype.padStart)) {
  padLeft = require('./lib/pad-left');
} else {
  padLeft = function(source, length, padding) {
    return source.padStart(length, padding || ' ');
  };
}

module.exports = padLeft;

},{"./lib/pad-left":7}],7:[function(require,module,exports){
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

},{"@fav/text.repeat":11}],8:[function(require,module,exports){
'use strict';

var padRight;

/* istanbul ignore if */
if (!Boolean(String.prototype.padEnd)) {
  padRight = require('./lib/pad-right');
} else {
  padRight = function(source, length, padding) {
    return source.padEnd(length, padding || ' ');
  };
}

module.exports = padRight;

},{"./lib/pad-right":9}],9:[function(require,module,exports){
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

},{"@fav/text.repeat":11}],10:[function(require,module,exports){
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

},{"@fav/text.repeat":11}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
'use strict';

function startsWith(string, target, startIndex) {
  startIndex = Math.max(startIndex, 0) || 0;
  /* eslint eqeqeq: off */
  return string.slice(startIndex, startIndex + target.length) == target;
}

module.exports = startsWith;

},{}],13:[function(require,module,exports){
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

},{"@fav/text.escape":3}],14:[function(require,module,exports){
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

},{"@fav/text.escape":3}],15:[function(require,module,exports){
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

},{"@fav/text.escape":3}],16:[function(require,module,exports){
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

},{"./lib/cyclic-increment":17}],17:[function(require,module,exports){
'use strict';

/* istanbul ignore next */
var maxSeqNo = Number.MAX_SAFE_INTEGER || 9007199254740991;

function cyclicIncrement(value) {
  return value < maxSeqNo ? value + 1 : 0;
}

module.exports = cyclicIncrement;

},{}]},{},[1])(1)
});