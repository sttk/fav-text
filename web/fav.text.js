(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).text = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"@fav/text.camel-case":2,"@fav/text.constant-case":3,"@fav/text.ends-with":4,"@fav/text.escape":5,"@fav/text.kebab-case":12,"@fav/text.pad":17,"@fav/text.pad-left":13,"@fav/text.pad-right":15,"@fav/text.pascal-case":18,"@fav/text.repeat":19,"@fav/text.snake-case":20,"@fav/text.starts-with":21,"@fav/text.trim":24,"@fav/text.trim-left":22,"@fav/text.trim-right":23,"@fav/text.unique":25}],2:[function(require,module,exports){
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
var htmlEntity = require('./lib/html-entity');
var htmlAttribute = require('./lib/html-attribute');
var byPreposition = require('./lib/create/by-preposition');
var byReplacement = require('./lib/create/by-replacement');

var escape = {};

Object.defineProperties(escape, {
  RegExp: { enumerable: true, value: regexp },
  RegExpCharClass: { enumerable: true, value: regexpCharClass },
  HtmlEntity: { enumerable: true, value: htmlEntity },
  HtmlAttribute: { enumerable: true, value: htmlAttribute },
  byPreposition: { enumerable: true, value: byPreposition },
  byReplacement: { enumerable: true, value: byReplacement },
});

module.exports = escape;

},{"./lib/create/by-preposition":6,"./lib/create/by-replacement":7,"./lib/html-attribute":8,"./lib/html-entity":9,"./lib/regexp":11,"./lib/regexp-charclass":10}],6:[function(require,module,exports){
'use strict';

var escapeRegexpCharClass = require('../regexp-charclass');

function createEscapingByPreposition(escapingChar, escapedChars) {
  var regexpCharClass = escapingChar + (escapedChars || '');
  regexpCharClass = escapeRegexpCharClass(regexpCharClass);

  var regexp = new RegExp('([' + regexpCharClass + '])', 'g');
  var replaced = escapingChar + '$&';

  return function(source) {
    return source.replace(regexp, replaced);
  };
}

module.exports = createEscapingByPreposition;

},{"../regexp-charclass":10}],7:[function(require,module,exports){
'use strict';

var escapeRegexpCharClass = require('../regexp-charclass');

function createEscapingByReplacement(escapingMap) {
  var regexpCharClass = Object.keys(escapingMap).join('');
  regexpCharClass = escapeRegexpCharClass(regexpCharClass);

  var regexp = new RegExp('[' + regexpCharClass + ']', 'g');

  function replaced(c) {
    return escapingMap[c];
  }

  return function(source) {
    return source.replace(regexp, replaced);
  };
}

module.exports = createEscapingByReplacement;

},{"../regexp-charclass":10}],8:[function(require,module,exports){
'use strict';

var create = require('./create/by-replacement');

module.exports = create({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});

},{"./create/by-replacement":7}],9:[function(require,module,exports){
'use strict';

var create = require('./create/by-replacement');

module.exports = create({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  ' ': '&nbsp;',
  '\n': '<br/>',
});

},{"./create/by-replacement":7}],10:[function(require,module,exports){
'use strict';

function regexpCharClass(source) {
  return source.replace(/([\-\^\]\\])/g, '\\$&');
}

module.exports = regexpCharClass;

},{}],11:[function(require,module,exports){
'use strict';

function regexp(source) {
  return source.replace(/([\\^$.*+?()[\]{}|])/g, '\\$&');
}

module.exports = regexp;

},{}],12:[function(require,module,exports){
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

},{"@fav/text.camel-case":2}],13:[function(require,module,exports){
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

},{"./lib/pad-left":14}],14:[function(require,module,exports){
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

},{"@fav/text.repeat":19}],15:[function(require,module,exports){
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

},{"./lib/pad-right":16}],16:[function(require,module,exports){
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

},{"@fav/text.repeat":19}],17:[function(require,module,exports){
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

},{"@fav/text.repeat":19}],18:[function(require,module,exports){
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

},{"@fav/text.camel-case":2}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"@fav/text.camel-case":2}],21:[function(require,module,exports){
'use strict';

function startsWith(string, target, startIndex) {
  startIndex = Math.max(startIndex, 0) || 0;
  /* eslint eqeqeq: off */
  return string.slice(startIndex, startIndex + target.length) == target;
}

module.exports = startsWith;

},{}],22:[function(require,module,exports){
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

},{"@fav/text.escape":5}],23:[function(require,module,exports){
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

},{"@fav/text.escape":5}],24:[function(require,module,exports){
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

},{"@fav/text.escape":5}],25:[function(require,module,exports){
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

},{"./lib/cyclic-increment":26}],26:[function(require,module,exports){
'use strict';

/* istanbul ignore next */
var maxSeqNo = Number.MAX_SAFE_INTEGER || 9007199254740991;

function cyclicIncrement(value) {
  return value < maxSeqNo ? value + 1 : 0;
}

module.exports = cyclicIncrement;

},{}]},{},[1])(1)
});
