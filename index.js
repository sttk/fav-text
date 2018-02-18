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
