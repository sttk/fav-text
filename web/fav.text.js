(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).text = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var camelCase = require('@fav/text.camel-case');
var constantCase = require('@fav/text.constant-case');
var endsWith = require('@fav/text.ends-with');
var escape = require('@fav/text.escape');
var kebabCase = require('@fav/text.kebab-case');
var pad = require('@fav/text.pad');
var padLeft = require('@fav/text.pad-left');
var padRight = require('@fav/text.pad-right');
var pascalCase = require('@fav/text.pascal-case');
var repeat = require('@fav/text.repeat');
var snakeCase = require('@fav/text.snake-case');
var startsWith = require('@fav/text.starts-with');
var trim = require('@fav/text.trim');
var trimLeft = require('@fav/text.trim-left');
var trimRight = require('@fav/text.trim-right');
var unique = require('@fav/text.unique');

var text = {};

Object.defineProperties(text, {
  camelCase: { enumerable: true, value: camelCase },
  constantCase: { enumerable: true, value: constantCase },
  endsWith: { enumerable: true, value: endsWith },
  escape: { enumerable: true, value: escape },
  kebabCase: { enumerable: true, value: kebabCase },
  pad: { enumerable: true, value: pad },
  padLeft: { enumerable: true, value: padLeft },
  padRight: { enumerable: true, value: padRight },
  pascalCase: { enumerable: true, value: pascalCase },
  repeat: { enumerable: true, value: repeat },
  snakeCase: { enumerable: true, value: snakeCase },
  startsWith: { enumerable: true, value: startsWith },
  trim: { enumerable: true, value: trim },
  trimLeft: { enumerable: true, value: trimLeft },
  trimRight: { enumerable: true, value: trimRight },
  unique: { enumerable: true, value: unique },
});

module.exports = text;

},{"@fav/text.camel-case":2,"@fav/text.constant-case":3,"@fav/text.ends-with":4,"@fav/text.escape":5,"@fav/text.kebab-case":8,"@fav/text.pad":13,"@fav/text.pad-left":9,"@fav/text.pad-right":11,"@fav/text.pascal-case":14,"@fav/text.repeat":15,"@fav/text.snake-case":16,"@fav/text.starts-with":17,"@fav/text.trim":20,"@fav/text.trim-left":18,"@fav/text.trim-right":19,"@fav/text.unique":21}],2:[function(require,module,exports){
'use strict';

function camelCase(text) {
  return join(split(text));
}

function split(text) {
  var words = text.match(/[A-Za-z0-9]+/g) || [];

  if (words.length === 1 && words[0].length === text.length) {
    if (/[a-z]/.test(text)) {
      words = splitCamelCase(text);
    }
  }

  return words;
}

function splitCamelCase(text) {
  var foundFirstUpperCase = /[A-Z]/.exec(text);
  if (!foundFirstUpperCase) {
    return [text];
  }

  var pattern = /[A-Z][a-z0-9]*/g;

  // PascalCase
  if (foundFirstUpperCase.index === 0) {
    return text.match(pattern);
  }

  // camelCase
  var words = text.slice(foundFirstUpperCase.index).match(pattern);
  words.unshift(text.slice(0, foundFirstUpperCase.index));
  return words;
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var word = String(words[0]);
  var ret = word.toLowerCase();

  for (var i = 1, n = words.length; i < n; i++) {
    word = String(words[i]);
    ret += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  return ret;
}

Object.defineProperties(camelCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = camelCase;

},{}],3:[function(require,module,exports){
'use strict';

var split = require('@fav/text.camel-case').split;

function constantCase(text) {
  return join(split(text));
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var ret = String(words[0]).toUpperCase();

  for (var i = 1, n = words.length; i < n; i++) {
    ret += '_' + String(words[i]).toUpperCase();;
  }

  return ret;
}

Object.defineProperties(constantCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = constantCase;

},{"@fav/text.camel-case":2}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var regexp = require('./lib/regexp');
var regexpCharClass = require('./lib/regexp-charclass');

var escape = {};

Object.defineProperties(escape, {
  RegExp: { enumerable: true, value: regexp },
  RegExpCharClass: { enumerable: true, value: regexpCharClass },
});

module.exports = escape;

},{"./lib/regexp":7,"./lib/regexp-charclass":6}],6:[function(require,module,exports){
'use strict';

function regexpCharClass(source) {
  return source.replace(/([\-\^\]\\])/g, '\\$&');
}

module.exports = regexpCharClass;

},{}],7:[function(require,module,exports){
'use strict';

function regexp(source) {
  return source.replace(/([\\^$.*+?()[\]{}|])/g, '\\$&');
}

module.exports = regexp;

},{}],8:[function(require,module,exports){
'use strict';

var split = require('@fav/text.camel-case').split;

function kebabCase(text) {
  return join(split(text));
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var ret = String(words[0]).toLowerCase();

  for (var i = 1, n = words.length; i < n; i++) {
    ret += '-' + String(words[i]).toLowerCase();;
  }

  return ret;
}

Object.defineProperties(kebabCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = kebabCase;

},{"@fav/text.camel-case":2}],9:[function(require,module,exports){
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

},{"./lib/pad-left":10}],10:[function(require,module,exports){
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

},{"@fav/text.repeat":15}],11:[function(require,module,exports){
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

},{"./lib/pad-right":12}],12:[function(require,module,exports){
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

},{"@fav/text.repeat":15}],13:[function(require,module,exports){
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

},{"@fav/text.repeat":15}],14:[function(require,module,exports){
'use strict';

var split = require('@fav/text.camel-case').split;

function pascalCase(text) {
  return join(split(text));
}

function join(words) {
  var ret = '';

  for (var i = 0, n = words.length; i < n; i++) {
    var word = String(words[i]);
    ret += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  return ret;
}

Object.defineProperties(pascalCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = pascalCase;

},{"@fav/text.camel-case":2}],15:[function(require,module,exports){
'use strict';

function repeat(source, ntimes) {
  if (ntimes < 1) {
    return '';
  }

  var unitlen = source.length;
  var halftime = Math.ceil(ntimes / 2);

  var i;
  for (i = 1; i < halftime; i += i) {
    source += source;
  }

  return source + source.slice(0, (ntimes - i) * unitlen);;
}

module.exports = repeat;

},{}],16:[function(require,module,exports){
'use strict';

var split = require('@fav/text.camel-case').split;

function snakeCase(text) {
  return join(split(text));
}

function join(words) {
  if (!words.length) {
    return '';
  }

  var ret = String(words[0]).toLowerCase();

  for (var i = 1, n = words.length; i < n; i++) {
    ret += '_' + String(words[i]).toLowerCase();;
  }

  return ret;
}

Object.defineProperties(snakeCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});

module.exports = snakeCase;

},{"@fav/text.camel-case":2}],17:[function(require,module,exports){
'use strict';

function startsWith(string, target, startIndex) {
  startIndex = Math.max(startIndex, 0) || 0;
  /* eslint eqeqeq: off */
  return string.slice(startIndex, startIndex + target.length) == target;
}

module.exports = startsWith;

},{}],18:[function(require,module,exports){
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

},{"@fav/text.escape":5}],19:[function(require,module,exports){
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

},{"@fav/text.escape":5}],20:[function(require,module,exports){
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

},{"@fav/text.escape":5}],21:[function(require,module,exports){
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
  get: function() {
    return seqNo;
  },
});

module.exports = unique;

},{"./lib/cyclic-increment":22}],22:[function(require,module,exports){
'use strict';

/* istanbul ignore next */
var maxSeqNo = Number.MAX_SAFE_INTEGER || 9007199254740991;

function cyclicIncrement(value) {
  return value < maxSeqNo ? value + 1 : 0;
}

module.exports = cyclicIncrement;

},{}]},{},[1])(1)
});