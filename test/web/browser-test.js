(function(){
'use strict';


var expect = chai.expect;



var camelCase = fav.text.camelCase;

describe('fav.text.camelCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(camelCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(camelCase('foo')).to.equal('foo');
    expect(camelCase('foobarbaz')).to.equal('foobarbaz');
    expect(camelCase('foo123')).to.equal('foo123');
    expect(camelCase('foo1bar2baz3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a lower case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(camelCase('FOO')).to.equal('foo');
    expect(camelCase('FOOBARBAZ')).to.equal('foobarbaz');
  });

  it('Should convert a camel case string when a given string is camel case',
  function() {
    expect(camelCase('fooBarBaz')).to.equal('fooBarBaz');
    expect(camelCase('foo1Bar2Baz3')).to.equal('foo1Bar2Baz3');

    expect(camelCase('fOO1BAR2BAZ3')).to.equal('fOO1BAR2BAZ3');
  });

  it('Should convert a camel case string when a given string is pascal case',
  function() {
    expect(camelCase('FooBarBaz')).to.equal('fooBarBaz');
    expect(camelCase('Foo1Bar2Baz3')).to.equal('foo1Bar2Baz3');

    expect(camelCase('FOO1BAR2BAZ3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a camel case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(camelCase('foo bar baz')).to.equal('fooBarBaz');
    expect(camelCase('  FOO  BAR  BAZ ')).to.equal('fooBarBaz');
    expect(camelCase('Foo Bar Baz   ')).to.equal('fooBarBaz');

    expect(camelCase(' f o o b a r  ')).to.equal('fOOBAR');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(camelCase('foo-bar-baz')).to.equal('fooBarBaz');
    expect(camelCase('--FOO-BAR--BAZ---')).to.equal('fooBarBaz');
    expect(camelCase('Foo-Bar-Baz---')).to.equal('fooBarBaz');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(camelCase('foo_bar_baz')).to.equal('fooBarBaz');
    expect(camelCase('__FOO_BAR__BAZ___')).to.equal('fooBarBaz');
    expect(camelCase('Foo_Bar_Baz___')).to.equal('fooBarBaz');
  });

  it('Should convert a camel case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(camelCase('@foo.bar,  baz!')).to.equal('fooBarBaz');
    expect(camelCase('%FOO&&BAR # # BAZ$$$')).to.equal('fooBarBaz');
    expect(camelCase('Foo+Bar = Baz')).to.equal('fooBarBaz');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;



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


})();
(function(){
'use strict';


var expect = chai.expect;



var endsWith = fav.text.endsWith;

describe('fav.text.endsWith', function() {

  it('Should return true when 1st and 2nd string is empty', function() {
    expect(endsWith('', '')).to.equal(true);
    expect(endsWith('', '', 0)).to.equal(true);
    expect(endsWith('', '', 1)).to.equal(true);
    expect(endsWith('', '', -1)).to.equal(true);
    expect(endsWith('', '', null)).to.equal(true);
    expect(endsWith('', '', 'a')).to.equal(true);
    expect(endsWith('', '', [])).to.equal(true);
    expect(endsWith('', '', {})).to.equal(true);
    expect(endsWith('', '', NaN)).to.equal(true);
    expect(endsWith('', '', Infinity)).to.equal(true);
  });

  it('Should return false when 1st is empty and 2nd is not empty', function() {
    expect(endsWith('', 'a')).to.equal(false);
    expect(endsWith('', 'a', 0)).to.equal(false);
    expect(endsWith('', 'a', 1)).to.equal(false);
    expect(endsWith('', 'a', -1)).to.equal(false);
    expect(endsWith('', 'a', null)).to.equal(false);
    expect(endsWith('', 'a', 'a')).to.equal(false);
    expect(endsWith('', 'a', [])).to.equal(false);
    expect(endsWith('', 'a', {})).to.equal(false);
    expect(endsWith('', 'a', NaN)).to.equal(false);
    expect(endsWith('', 'a', Infinity)).to.equal(false);
  });

  it('Should return true when 1st is not empty and 2nd is empty', function() {
    expect(endsWith('A', '')).to.equal(true);
    expect(endsWith('A', '', 0)).to.equal(true);
    expect(endsWith('A', '', 1)).to.equal(true);
    expect(endsWith('A', '', -1)).to.equal(true);
    expect(endsWith('A', '', null)).to.equal(true);
    expect(endsWith('A', '', 'a')).to.equal(true);
    expect(endsWith('A', '', [])).to.equal(true);
    expect(endsWith('A', '', {})).to.equal(true);
    expect(endsWith('A', '', NaN)).to.equal(true);
    expect(endsWith('A', '', Infinity)).to.equal(true);
  });

  it('Should return true when 1st ends with 2nd', function() {
    expect(endsWith('abc', 'bc')).to.equal(true);
    expect(endsWith('123', '23')).to.equal(true);
    expect(endsWith('あいう', 'いう')).to.equal(true);
  });

  it('Should return false when 1st does not start iwth 2nd', function() {
    expect(endsWith('abc', 'ab')).to.equal(false);
    expect(endsWith('123', '12')).to.equal(false);
    expect(endsWith('あいう', 'あい')).to.equal(false);
  });

  it('Should return true when 1st up to given index ends with 2nd',
  function() {
    expect(endsWith('abc', 'bc', 3)).to.equal(true);
    expect(endsWith('abc', 'ab', 2)).to.equal(true);
    expect(endsWith('abc', 'a', 1)).to.equal(true);
    expect(endsWith('あいう', 'いう', 3)).to.equal(true);
    expect(endsWith('あいう', 'あい', 2)).to.equal(true);
    expect(endsWith('あいう', 'あ', 1)).to.equal(true);
  });

  it('Should return false when 1st up to given index does not start with 2nd',
  function() {
    expect(endsWith('abc', 'bc', 0)).to.equal(false);
    expect(endsWith('abc', 'bc', 1)).to.equal(false);
    expect(endsWith('abc', 'bc', 2)).to.equal(false);
    expect(endsWith('abc', 'ab', 0)).to.equal(false);
    expect(endsWith('abc', 'ab', 1)).to.equal(false);
    expect(endsWith('abc', 'ab', 3)).to.equal(false);
    expect(endsWith('abc', 'a', 0)).to.equal(false);
    expect(endsWith('abc', 'a', 2)).to.equal(false);
    expect(endsWith('abc', 'a', 3)).to.equal(false);
    expect(endsWith('あいう', 'いう', 0)).to.equal(false);
    expect(endsWith('あいう', 'いう', 1)).to.equal(false);
    expect(endsWith('あいう', 'いう', 2)).to.equal(false);
    expect(endsWith('あいう', 'あい', 0)).to.equal(false);
    expect(endsWith('あいう', 'あい', 1)).to.equal(false);
    expect(endsWith('あいう', 'あい', 3)).to.equal(false);
    expect(endsWith('あいう', 'あ', 0)).to.equal(false);
    expect(endsWith('あいう', 'あ', 2)).to.equal(false);
    expect(endsWith('あいう', 'あ', 3)).to.equal(false);
  });

  it('Should return correct results when argument is string objects',
  function() {
    expect(endsWith('abc', new String('bc'))).to.equal(true);
    expect(endsWith(new String('abc'), 'bc')).to.equal(true);
    expect(endsWith(new String('abc'), new String('bc'))).to.equal(true);

    expect(endsWith('abc', new String('ab'))).to.equal(false);
    expect(endsWith(new String('abc'), 'ab')).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'))).to.equal(false);

    expect(endsWith('abc', new String('ab'), 0)).to.equal(false);
    expect(endsWith(new String('abc'), 'ab', 0)).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'), 0)).to.equal(false);

    expect(endsWith('abc', new String('ab'), 1)).to.equal(false);
    expect(endsWith(new String('abc'), 'ab', 1)).to.equal(false);
    expect(endsWith(new String('abc'), new String('ab'), 1)).to.equal(false);

    expect(endsWith('abc', new String('ab'), 2)).to.equal(true);
    expect(endsWith(new String('abc'), 'ab', 2)).to.equal(true);
    expect(endsWith(new String('abc'), new String('ab'), 2)).to.equal(true);
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.byPreposition('\\', '$%()*.');

describe('fav.text.escape.byPreposition', function() {

  it('Should escape special chars by preposition of 1st arg', function() {
    expect(escape('$%()*.\\')).to.equal('\\$\\%\\(\\)\\*\\.\\\\');
  });

  it('Should not escape other characters', function() {
    var str = 'ABC!@&{}';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('aaa $(bbb) %ccc% ddd*.eee\\fff')).to.equal(
      'aaa \\$\\(bbb\\) \\%ccc\\% ddd\\*\\.eee\\\\fff');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });

  it('Should escape only chars which are same with 1st arg when 2nd arg is ' +
  'not specified', function() {
    var escape2 = fav.text.escape.byPreposition('%');
    expect(escape2('a$&aa %bbb% ccc')).to.equal('a$&aa %%bbb%% ccc');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.byReplacement({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});

describe('fav.text.escape.byReplacement', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
  });

  it('Should not escape other characters', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape('"')).to.equal('&quot;');
    expect(escape('\'')).to.equal('&apos;');

    expect(escape('<>&"\'')).to.equal('&lt;&gt;&amp;&quot;&apos;');
  });

  it('Should escape only special characters in a string', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;,.?/ \r\n';
    expect(escape(str)).to.equal(str);
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; &quot;orange&quot;.&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.HtmlAttribute;

describe('fav.text.escape["HtmlAttribute"]', function() {

  it('Should escape special chars of HTML Attribute', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape('"')).to.equal('&quot;');
    expect(escape('\'')).to.equal('&apos;');

    expect(escape('<>&"\'')).to.equal('&lt;&gt;&amp;&quot;&apos;');
  });

  it('Should not escape other characters', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;,.?/ \r\n';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple  &amp; &quot;orange&quot;.&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.HtmlEntity;

describe('fav.text.escape["HtmlEntity"]', function() {

  it('Should escape special chars of HTML Entity', function() {
    expect(escape('<')).to.equal('&lt;');
    expect(escape('>')).to.equal('&gt;');
    expect(escape('&')).to.equal('&amp;');
    expect(escape(' ')).to.equal('&nbsp;');
    expect(escape('\n')).to.equal('<br/>');

    expect(escape('<>& \n')).to.equal('&lt;&gt;&amp;&nbsp;<br/>');
  });

  it('Should not escape other characters', function() {
    var str = '~`!@#$%^*()_-+={[}]|\\:;\'",.?/\r';
    expect(escape(str)).to.equal(str);
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('<span>Apple  & "orange".</span>')).to.equal(
      '&lt;span&gt;Apple&nbsp;&nbsp;&amp;&nbsp;"orange".&lt;/span&gt;');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.RegExpCharClass;

describe('fav.text.escape["RegExpCharClass"]', function() {

  it('Should escape special chars of Regular Expression Character Class',
  function() {
    expect(escape('-')).to.equal('\\-');
    expect(escape('^')).to.equal('\\^');
    expect(escape(']')).to.equal('\\]');
    expect(escape('\\')).to.equal('\\\\');

    expect(escape('-^]\\')).to.equal('\\-\\^\\]\\\\');
  });

  it('Should not escape other characters', function() {
    expect(escape('')).to.equal('');
    expect(escape(' ')).to.equal(' ');
    expect(escape('abcdefghijklmnopqrstuvwxyz'))
      .to.equal('abcdefghijklmnopqrstuvwxyz');
    expect(escape('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
      .to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(escape('1234567890')).to.equal('1234567890');
    expect(escape('~`!@#$%&*()_=+[{}|:;\'"<,>./?'))
      .to.equal('~`!@#$%&*()_=+[{}|:;\'"<,>./?');
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('^a-z1-9]\\ABC')).to.equal('\\^a\\-z1\\-9\\]\\\\ABC');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


var escape = fav.text.escape.RegExp;

describe('fav.text.escape["RegExp"]', function() {

  it('Should escape special chars of Regular Expression', function() {
    expect(escape('^')).to.equal('\\^');
    expect(escape('$')).to.equal('\\$');
    expect(escape('\\')).to.equal('\\\\');
    expect(escape('.')).to.equal('\\.');
    expect(escape('*')).to.equal('\\*');
    expect(escape('+')).to.equal('\\+');
    expect(escape('?')).to.equal('\\?');
    expect(escape('(')).to.equal('\\(');
    expect(escape(')')).to.equal('\\)');
    expect(escape('[')).to.equal('\\[');
    expect(escape(']')).to.equal('\\]');
    expect(escape('{')).to.equal('\\{');
    expect(escape('}')).to.equal('\\}');
    expect(escape('|')).to.equal('\\|');

    expect(escape('^$\\.*+?()[]{}|'))
      .to.equal('\\^\\$\\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|');
  });

  it('Should not escape other characters', function() {
    expect(escape('')).to.equal('');
    expect(escape(' ')).to.equal(' ');
    expect(escape('abcdefghijklmnopqrstuvwxyz'))
      .to.equal('abcdefghijklmnopqrstuvwxyz');
    expect(escape('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
      .to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(escape('1234567890')).to.equal('1234567890');
    expect(escape('~`!@#%&_-=:;"\'<,>/')).to.equal('~`!@#%&_-=:;"\'<,>/');
  });

  it('Should escape only special characters in a string', function() {
    expect(escape('^abc.{1,3}[1-9]*$'))
      .to.equal('\\^abc\\.\\{1,3\\}\\[1-9\\]\\*\\$');
  });

  it('Should not error when an argument is empty', function() {
    expect(escape('')).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;



var kebabCase = fav.text.kebabCase;

describe('fav.text.kebabCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(kebabCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(kebabCase('foo')).to.equal('foo');
    expect(kebabCase('foobarbaz')).to.equal('foobarbaz');
    expect(kebabCase('foo123')).to.equal('foo123');
    expect(kebabCase('foo1bar2baz3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a kebab case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(kebabCase('FOO')).to.equal('foo');
    expect(kebabCase('FOOBARBAZ')).to.equal('foobarbaz');
  });

  it('Should convert a kebab case string when a given string is kebab case',
  function() {
    expect(kebabCase('fooBarBaz')).to.equal('foo-bar-baz');
    expect(kebabCase('foo1Bar2Baz3')).to.equal('foo1-bar2-baz3');

    expect(kebabCase('fOO1BAR2BAZ3')).to.equal('f-o-o1-b-a-r2-b-a-z3');
  });

  it('Should convert a kebab case string when a given string is kebab case',
  function() {
    expect(kebabCase('FooBarBaz')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo1Bar2Baz3')).to.equal('foo1-bar2-baz3');

    expect(kebabCase('FOO1BAR2BAZ3')).to.equal('foo1bar2baz3');
  });

  it('Should convert a kebab case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(kebabCase('foo bar baz')).to.equal('foo-bar-baz');
    expect(kebabCase('  FOO  BAR  BAZ ')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo Bar Baz   ')).to.equal('foo-bar-baz');

    expect(kebabCase(' f o o b a r  ')).to.equal('f-o-o-b-a-r');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(kebabCase('foo-bar-baz')).to.equal('foo-bar-baz');
    expect(kebabCase('--FOO-BAR--BAZ---')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo-Bar-Baz---')).to.equal('foo-bar-baz');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(kebabCase('foo_bar_baz')).to.equal('foo-bar-baz');
    expect(kebabCase('__FOO_BAR__BAZ___')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo_Bar_Baz___')).to.equal('foo-bar-baz');
  });

  it('Should convert a kebab case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(kebabCase('@foo.bar,  baz!')).to.equal('foo-bar-baz');
    expect(kebabCase('%FOO&&BAR # # BAZ$$$')).to.equal('foo-bar-baz');
    expect(kebabCase('Foo+Bar = Baz')).to.equal('foo-bar-baz');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


var padLeft = fav.text.padLeft;

describe('fav.text.padLeft', function() {

  it('Should fill padding on left side', function() {
    expect(padLeft('abcd', 5, '_')).to.equal('_abcd');
    expect(padLeft('abcd', 6, '_')).to.equal('__abcd');
    expect(padLeft('abcd', 7, '_')).to.equal('___abcd');
    expect(padLeft('abcd', 8, '_')).to.equal('____abcd');
    expect(padLeft('abcd', 9, '_')).to.equal('_____abcd');
    expect(padLeft('abcd', 10, '_')).to.equal('______abcd');
    expect(padLeft('abcd', 11, '_')).to.equal('_______abcd');
    expect(padLeft('abcd', 12, '_')).to.equal('________abcd');

    expect(padLeft('abcd', 5, '_@')).to.equal('_abcd');
    expect(padLeft('abcd', 6, '_@')).to.equal('_@abcd');
    expect(padLeft('abcd', 7, '_@')).to.equal('_@_abcd');
    expect(padLeft('abcd', 8, '_@')).to.equal('_@_@abcd');
    expect(padLeft('abcd', 9, '_@')).to.equal('_@_@_abcd');
    expect(padLeft('abcd', 10, '_@')).to.equal('_@_@_@abcd');
    expect(padLeft('abcd', 11, '_@')).to.equal('_@_@_@_abcd');
    expect(padLeft('abcd', 12, '_@')).to.equal('_@_@_@_@abcd');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(padLeft('abcd', 0, '_')).to.equal('abcd');
    expect(padLeft('abcd', 1, '_')).to.equal('abcd');
    expect(padLeft('abcd', 2, '_')).to.equal('abcd');
    expect(padLeft('abcd', 3, '_')).to.equal('abcd');
    expect(padLeft('abcd', 4, '_')).to.equal('abcd');

    expect(padLeft('abcd', 0, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 1, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 2, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 3, '_@')).to.equal('abcd');
    expect(padLeft('abcd', 4, '_@')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(padLeft('abcd', 5)).to.equal(' abcd');
    expect(padLeft('abcd', 6)).to.equal('  abcd');
    expect(padLeft('abcd', 7)).to.equal('   abcd');
    expect(padLeft('abcd', 8)).to.equal('    abcd');
    expect(padLeft('abcd', 9)).to.equal('     abcd');
    expect(padLeft('abcd', 10)).to.equal('      abcd');
    expect(padLeft('abcd', 11)).to.equal('       abcd');
    expect(padLeft('abcd', 12)).to.equal('        abcd');
  });

  it('Should pad white spaces when `padding` is an empty string', function() {
    expect(padLeft('abcd', 0, '')).to.equal('abcd');
    expect(padLeft('abcd', 1, '')).to.equal('abcd');
    expect(padLeft('abcd', 2, '')).to.equal('abcd');
    expect(padLeft('abcd', 3, '')).to.equal('abcd');
    expect(padLeft('abcd', 4, '')).to.equal('abcd');
    expect(padLeft('abcd', 5, '')).to.equal(' abcd');
    expect(padLeft('abcd', 6, '')).to.equal('  abcd');
    expect(padLeft('abcd', 7, '')).to.equal('   abcd');
    expect(padLeft('abcd', 8, '')).to.equal('    abcd');
    expect(padLeft('abcd', 9, '')).to.equal('     abcd');
    expect(padLeft('abcd', 10, '')).to.equal('      abcd');
    expect(padLeft('abcd', 11, '')).to.equal('       abcd');
    expect(padLeft('abcd', 12, '')).to.equal('        abcd');
  });

  it('Should return source when `length` is not specified', function() {
    expect(padLeft('')).to.equal('');
    expect(padLeft('a')).to.equal('a');
    expect(padLeft('abcd')).to.equal('abcd');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


var padRight = fav.text.padRight;

describe('fav.text.padRight', function() {

  it('Should fill padding on right side', function() {
    expect(padRight('abcd', 5, '_')).to.equal('abcd_');
    expect(padRight('abcd', 6, '_')).to.equal('abcd__');
    expect(padRight('abcd', 7, '_')).to.equal('abcd___');
    expect(padRight('abcd', 8, '_')).to.equal('abcd____');
    expect(padRight('abcd', 9, '_')).to.equal('abcd_____');
    expect(padRight('abcd', 10, '_')).to.equal('abcd______');
    expect(padRight('abcd', 11, '_')).to.equal('abcd_______');
    expect(padRight('abcd', 12, '_')).to.equal('abcd________');

    expect(padRight('abcd', 5, '_@')).to.equal('abcd_');
    expect(padRight('abcd', 6, '_@')).to.equal('abcd_@');
    expect(padRight('abcd', 7, '_@')).to.equal('abcd_@_');
    expect(padRight('abcd', 8, '_@')).to.equal('abcd_@_@');
    expect(padRight('abcd', 9, '_@')).to.equal('abcd_@_@_');
    expect(padRight('abcd', 10, '_@')).to.equal('abcd_@_@_@');
    expect(padRight('abcd', 11, '_@')).to.equal('abcd_@_@_@_');
    expect(padRight('abcd', 12, '_@')).to.equal('abcd_@_@_@_@');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(padRight('abcd', 0, '_')).to.equal('abcd');
    expect(padRight('abcd', 1, '_')).to.equal('abcd');
    expect(padRight('abcd', 2, '_')).to.equal('abcd');
    expect(padRight('abcd', 3, '_')).to.equal('abcd');
    expect(padRight('abcd', 4, '_')).to.equal('abcd');

    expect(padRight('abcd', 0, '_@')).to.equal('abcd');
    expect(padRight('abcd', 1, '_@')).to.equal('abcd');
    expect(padRight('abcd', 2, '_@')).to.equal('abcd');
    expect(padRight('abcd', 3, '_@')).to.equal('abcd');
    expect(padRight('abcd', 4, '_@')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(padRight('abcd', 5)).to.equal('abcd ');
    expect(padRight('abcd', 6)).to.equal('abcd  ');
    expect(padRight('abcd', 7)).to.equal('abcd   ');
    expect(padRight('abcd', 8)).to.equal('abcd    ');
    expect(padRight('abcd', 9)).to.equal('abcd     ');
    expect(padRight('abcd', 10)).to.equal('abcd      ');
    expect(padRight('abcd', 11)).to.equal('abcd       ');
    expect(padRight('abcd', 12)).to.equal('abcd        ');
  });

  it('Should pad white spaces when `padding` is an empty string', function() {
    expect(padRight('abcd', 0, '')).to.equal('abcd');
    expect(padRight('abcd', 1, '')).to.equal('abcd');
    expect(padRight('abcd', 2, '')).to.equal('abcd');
    expect(padRight('abcd', 3, '')).to.equal('abcd');
    expect(padRight('abcd', 4, '')).to.equal('abcd');
    expect(padRight('abcd', 5, '')).to.equal('abcd ');
    expect(padRight('abcd', 6, '')).to.equal('abcd  ');
    expect(padRight('abcd', 7, '')).to.equal('abcd   ');
    expect(padRight('abcd', 8, '')).to.equal('abcd    ');
    expect(padRight('abcd', 9, '')).to.equal('abcd     ');
    expect(padRight('abcd', 10, '')).to.equal('abcd      ');
    expect(padRight('abcd', 11, '')).to.equal('abcd       ');
    expect(padRight('abcd', 12, '')).to.equal('abcd        ');
  });

  it('Should return source when `length` is not specified', function() {
    expect(padRight('')).to.equal('');
    expect(padRight('a')).to.equal('a');
    expect(padRight('abcd')).to.equal('abcd');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var pad = fav.text.pad;

describe('fav.text.pad', function() {

  it('Should fill odd number of paddings', function() {
    expect(pad('abcd', 5, '_')).to.equal('abcd_');
    expect(pad('abcd', 7, '_')).to.equal('_abcd__');
    expect(pad('abcd', 9, '_')).to.equal('__abcd___');
    expect(pad('abcd', 11, '_')).to.equal('___abcd____');

    expect(pad('abcd', 5, '_#')).to.equal('abcd_');
    expect(pad('abcd', 7, '_#')).to.equal('_abcd_#');
    expect(pad('abcd', 9, '_#')).to.equal('_#abcd_#_');
    expect(pad('abcd', 11, '_#')).to.equal('_#_abcd_#_#');
  });

  it('Should fill even number of paddings', function() {
    expect(pad('abcd', 6, '_')).to.equal('_abcd_');
    expect(pad('abcd', 8, '_')).to.equal('__abcd__');
    expect(pad('abcd', 10, '_')).to.equal('___abcd___');
    expect(pad('abcd', 12, '_')).to.equal('____abcd____');

    expect(pad('abcd', 6, '_#')).to.equal('_abcd_');
    expect(pad('abcd', 8, '_#')).to.equal('_#abcd_#');
    expect(pad('abcd', 10, '_#')).to.equal('_#_abcd_#_');
    expect(pad('abcd', 12, '_#')).to.equal('_#_#abcd_#_#');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(pad('abcd', 0, '_')).to.equal('abcd');
    expect(pad('abcd', 1, '_')).to.equal('abcd');
    expect(pad('abcd', 2, '_')).to.equal('abcd');
    expect(pad('abcd', 3, '_')).to.equal('abcd');
    expect(pad('abcd', 4, '_')).to.equal('abcd');

    expect(pad('abcd', 0, '_#')).to.equal('abcd');
    expect(pad('abcd', 1, '_#')).to.equal('abcd');
    expect(pad('abcd', 2, '_#')).to.equal('abcd');
    expect(pad('abcd', 3, '_#')).to.equal('abcd');
    expect(pad('abcd', 4, '_#')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(pad('abcd', 5)).to.equal('abcd ');
    expect(pad('abcd', 6)).to.equal(' abcd ');
    expect(pad('abcd', 7)).to.equal(' abcd  ');
    expect(pad('abcd', 8)).to.equal('  abcd  ');
    expect(pad('abcd', 9)).to.equal('  abcd   ');
    expect(pad('abcd', 10)).to.equal('   abcd   ');
    expect(pad('abcd', 11)).to.equal('   abcd    ');
    expect(pad('abcd', 12)).to.equal('    abcd    ');
  });

  it('Should pad white spaces when `padding` is an empty string',
  function() {
    expect(pad('abcd', 0, '')).to.equal('abcd');
    expect(pad('abcd', 1, '')).to.equal('abcd');
    expect(pad('abcd', 2, '')).to.equal('abcd');
    expect(pad('abcd', 3, '')).to.equal('abcd');
    expect(pad('abcd', 4, '')).to.equal('abcd');
    expect(pad('abcd', 5, '')).to.equal('abcd ');
    expect(pad('abcd', 6, '')).to.equal(' abcd ');
    expect(pad('abcd', 7, '')).to.equal(' abcd  ');
    expect(pad('abcd', 8, '')).to.equal('  abcd  ');
    expect(pad('abcd', 9, '')).to.equal('  abcd   ');
    expect(pad('abcd', 10, '')).to.equal('   abcd   ');
    expect(pad('abcd', 11, '')).to.equal('   abcd    ');
    expect(pad('abcd', 12, '')).to.equal('    abcd    ');
  });

  it('Should return source when `length` is not specified', function() {
    expect(pad('')).to.equal('');
    expect(pad('a')).to.equal('a');
    expect(pad('abcd')).to.equal('abcd');
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;



var pascalCase = fav.text.pascalCase;

describe('fav.text.pascalCase', function() {

  it('Should return an empty string when a given string is an empty string',
  function() {
    expect(pascalCase('')).to.equal('');
  });

  it('Should return a string with no conversion when a given string is ' +
  '\n\tcomposed of only lower cases and numbers', function() {
    expect(pascalCase('foo')).to.equal('Foo');
    expect(pascalCase('foobarbaz')).to.equal('Foobarbaz');
    expect(pascalCase('foo123')).to.equal('Foo123');
    expect(pascalCase('foo1bar2baz3')).to.equal('Foo1bar2baz3');
  });

  it('Should convert a pascal case string when a given string is composed' +
  '\n\t of only upper case characters', function() {
    expect(pascalCase('FOO')).to.equal('Foo');
    expect(pascalCase('FOOBARBAZ')).to.equal('Foobarbaz');
  });

  it('Should convert a pascal case string when a given string is pascal case',
  function() {
    expect(pascalCase('fooBarBaz')).to.equal('FooBarBaz');
    expect(pascalCase('foo1Bar2Baz3')).to.equal('Foo1Bar2Baz3');

    expect(pascalCase('fOO1BAR2BAZ3')).to.equal('FOO1BAR2BAZ3');
  });

  it('Should convert a pascal case string when a given string is pascal case',
  function() {
    expect(pascalCase('FooBarBaz')).to.equal('FooBarBaz');
    expect(pascalCase('Foo1Bar2Baz3')).to.equal('Foo1Bar2Baz3');

    expect(pascalCase('FOO1BAR2BAZ3')).to.equal('Foo1bar2baz3');
  });

  it('Should convert a pascal case string when a give string is separated by' +
  '\n\twhite spaces', function() {
    expect(pascalCase('foo bar baz')).to.equal('FooBarBaz');
    expect(pascalCase('  FOO  BAR  BAZ ')).to.equal('FooBarBaz');
    expect(pascalCase('Foo Bar Baz   ')).to.equal('FooBarBaz');

    expect(pascalCase(' f o o b a r  ')).to.equal('FOOBAR');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\thyphens', function() {
    expect(pascalCase('foo-bar-baz')).to.equal('FooBarBaz');
    expect(pascalCase('--FOO-BAR--BAZ---')).to.equal('FooBarBaz');
    expect(pascalCase('Foo-Bar-Baz---')).to.equal('FooBarBaz');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\tunderscore', function() {
    expect(pascalCase('foo_bar_baz')).to.equal('FooBarBaz');
    expect(pascalCase('__FOO_BAR__BAZ___')).to.equal('FooBarBaz');
    expect(pascalCase('Foo_Bar_Baz___')).to.equal('FooBarBaz');
  });

  it('Should convert a pascal case string when a given string is separated by' +
  '\n\tnon-alphanumeric chars', function() {
    expect(pascalCase('@foo.bar,  baz!')).to.equal('FooBarBaz');
    expect(pascalCase('%FOO&&BAR # # BAZ$$$')).to.equal('FooBarBaz');
    expect(pascalCase('Foo+Bar = Baz')).to.equal('FooBarBaz');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


var repeat = fav.text.repeat;

describe('fav.text.repeat', function() {

  it('Should get repeated character', function() {
    expect(repeat('a', 0)).to.equal('');
    expect(repeat('a', 1)).to.equal('a');
    expect(repeat('a', 2)).to.equal('aa');
    expect(repeat('a', 3)).to.equal('aaa');
    expect(repeat('a', 4)).to.equal('aaaa');
    expect(repeat('a', 5)).to.equal('aaaaa');
    expect(repeat('a', 6)).to.equal('aaaaaa');

    for (var i = 0; i < 1000; i++) {
      expect(repeat('a', i)).to.equal(repeatSimply('a', i));
    }
  });

  it('Should get repeated string', function() {
    expect(repeat('abc', 0)).to.equal('');
    expect(repeat('abc', 1)).to.equal('abc');
    expect(repeat('abc', 2)).to.equal('abcabc');
    expect(repeat('abc', 3)).to.equal('abcabcabc');
    expect(repeat('abc', 4)).to.equal('abcabcabcabc');
    expect(repeat('abc', 5)).to.equal('abcabcabcabcabc');
    expect(repeat('abc', 6)).to.equal('abcabcabcabcabcabc');

    for (var i = 0; i < 1000; i++) {
      expect(repeat('abc', i)).to.equal(repeatSimply('abc', i));
    }
  });

  it('Should get repeated empty string', function() {
    expect(repeat('', 0)).to.equal('');
    expect(repeat('', 1)).to.equal('');
    expect(repeat('', 2)).to.equal('');
    expect(repeat('', 3)).to.equal('');
    expect(repeat('', 4)).to.equal('');
    expect(repeat('', 5)).to.equal('');
    expect(repeat('', 6)).to.equal('');
  });

  it('Should repeat normally when the arguments are a String object and ' +
  '\n\ta Number object', function() {
    expect(repeat(new String('abc'), new Number(0))).to.equal('');
    expect(repeat(new String('abc'), new Number(1))).to.equal('abc');
    expect(repeat(new String('abc'), new Number(2))).to.equal('abcabc');
    expect(repeat(new String('abc'), new Number(3))).to.equal('abcabcabc');
  });
});

function repeatSimply(text, n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += text;
  }
  return result;
}

})();
(function(){
'use strict';


var expect = chai.expect;



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


})();
(function(){
'use strict';


var expect = chai.expect;



var startsWith = fav.text.startsWith;

describe('fav.text.startsWith', function() {

  it('Should return true when 1st and 2nd string is empty', function() {
    expect(startsWith('', '')).to.equal(true);
    expect(startsWith('', '', 0)).to.equal(true);
    expect(startsWith('', '', 1)).to.equal(true);
    expect(startsWith('', '', -1)).to.equal(true);
    expect(startsWith('', '', null)).to.equal(true);
    expect(startsWith('', '', 'a')).to.equal(true);
    expect(startsWith('', '', [])).to.equal(true);
    expect(startsWith('', '', {})).to.equal(true);
    expect(startsWith('', '', NaN)).to.equal(true);
    expect(startsWith('', '', Infinity)).to.equal(true);
  });

  it('Should return false when 1st is empty and 2nd is not empty', function() {
    expect(startsWith('', 'a')).to.equal(false);
    expect(startsWith('', 'a', 0)).to.equal(false);
    expect(startsWith('', 'a', 1)).to.equal(false);
    expect(startsWith('', 'a', -1)).to.equal(false);
    expect(startsWith('', 'a', null)).to.equal(false);
    expect(startsWith('', 'a', 'a')).to.equal(false);
    expect(startsWith('', 'a', [])).to.equal(false);
    expect(startsWith('', 'a', {})).to.equal(false);
    expect(startsWith('', 'a', NaN)).to.equal(false);
    expect(startsWith('', 'a', Infinity)).to.equal(false);
  });

  it('Should return true when 1st is not empty and 2nd is empty', function() {
    expect(startsWith('A', '')).to.equal(true);
    expect(startsWith('A', '', 0)).to.equal(true);
    expect(startsWith('A', '', 1)).to.equal(true);
    expect(startsWith('A', '', -1)).to.equal(true);
    expect(startsWith('A', '', null)).to.equal(true);
    expect(startsWith('A', '', 'a')).to.equal(true);
    expect(startsWith('A', '', [])).to.equal(true);
    expect(startsWith('A', '', {})).to.equal(true);
    expect(startsWith('A', '', NaN)).to.equal(true);
    expect(startsWith('A', '', Infinity)).to.equal(true);
  });

  it('Should return true when 1st starts with 2nd', function() {
    expect(startsWith('abc', 'ab')).to.equal(true);
    expect(startsWith('123', '12')).to.equal(true);
    expect(startsWith('あいう', 'あい')).to.equal(true);
  });

  it('Should return false when 1st does not start with 2nd', function() {
    expect(startsWith('abc', 'bc')).to.equal(false);
    expect(startsWith('123', '23')).to.equal(false);
    expect(startsWith('あいう', 'いう')).to.equal(false);
  });

  it('Should return true when 1st from given index starts with 2nd',
  function() {
    expect(startsWith('abc', 'ab', 0)).to.equal(true);
    expect(startsWith('abc', 'bc', 1)).to.equal(true);
    expect(startsWith('abc', 'c', 2)).to.equal(true);
    expect(startsWith('123', '12', 0)).to.equal(true);
    expect(startsWith('123', '23', 1)).to.equal(true);
    expect(startsWith('123', '3', 2)).to.equal(true);
    expect(startsWith('あいう', 'あい', 0)).to.equal(true);
    expect(startsWith('あいう', 'いう', 1)).to.equal(true);
    expect(startsWith('あいう', 'う', 2)).to.equal(true);
    expect(startsWith('abc', 'ab', -1)).to.equal(true);
    expect(startsWith('123', '12', -1)).to.equal(true);
    expect(startsWith('あいう', 'あい', -1)).to.equal(true);
  });

  it('Should return false when 1st from given index does not start with 2nd',
  function() {
    expect(startsWith('abc', 'ab', 1)).to.equal(false);
    expect(startsWith('abc', 'ab', 2)).to.equal(false);
    expect(startsWith('abc', 'ab', 3)).to.equal(false);
    expect(startsWith('abc', 'bc', 0)).to.equal(false);
    expect(startsWith('abc', 'bc', 2)).to.equal(false);
    expect(startsWith('abc', 'bc', 3)).to.equal(false);
    expect(startsWith('abc', 'c', 0)).to.equal(false);
    expect(startsWith('abc', 'c', 1)).to.equal(false);
    expect(startsWith('abc', 'c', 3)).to.equal(false);
    expect(startsWith('123', '12', 1)).to.equal(false);
    expect(startsWith('123', '12', 2)).to.equal(false);
    expect(startsWith('123', '12', 3)).to.equal(false);
    expect(startsWith('123', '23', 0)).to.equal(false);
    expect(startsWith('123', '23', 2)).to.equal(false);
    expect(startsWith('123', '23', 3)).to.equal(false);
    expect(startsWith('123', '3', 0)).to.equal(false);
    expect(startsWith('123', '3', 1)).to.equal(false);
    expect(startsWith('123', '3', 3)).to.equal(false);
    expect(startsWith('あいう', 'あい', 1)).to.equal(false);
    expect(startsWith('あいう', 'あい', 2)).to.equal(false);
    expect(startsWith('あいう', 'あい', 3)).to.equal(false);
    expect(startsWith('あいう', 'いう', 0)).to.equal(false);
    expect(startsWith('あいう', 'いう', 2)).to.equal(false);
    expect(startsWith('あいう', 'いう', 3)).to.equal(false);
    expect(startsWith('あいう', 'う', 0)).to.equal(false);
    expect(startsWith('あいう', 'う', 1)).to.equal(false);
    expect(startsWith('あいう', 'う', 3)).to.equal(false);
  });

  it('Should return correct results when argument is string objects',
  function() {
    expect(startsWith('abc', new String('ab'))).to.equal(true);
    expect(startsWith(new String('abc'), 'ab')).to.equal(true);
    expect(startsWith(new String('abc'), new String('ab'))).to.equal(true);

    expect(startsWith('abc', new String('bc'))).to.equal(false);
    expect(startsWith(new String('abc'), 'bc')).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'))).to.equal(false);

    expect(startsWith('abc', new String('bc'), 0)).to.equal(false);
    expect(startsWith(new String('abc'), 'bc', 0)).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'), 0)).to.equal(false);

    expect(startsWith('abc', new String('bc'), 1)).to.equal(true);
    expect(startsWith(new String('abc'), 'bc', 1)).to.equal(true);
    expect(startsWith(new String('abc'), new String('bc'), 1)).to.equal(true);

    expect(startsWith('abc', new String('bc'), 2)).to.equal(false);
    expect(startsWith(new String('abc'), 'bc', 2)).to.equal(false);
    expect(startsWith(new String('abc'), new String('bc'), 2)).to.equal(false);
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var trimLeft = fav.text.trimLeft;

describe('fav.text.trimLeft', function() {

  it('Should remove leading white spaces', function() {
    expect(trimLeft(' a ')).to.equal('a ');
    expect(trimLeft(' 　abc 　 ')).to.equal('abc 　 ');
    expect(trimLeft(' \t abc  \n \t ')).to.equal('abc  \n \t ');
    expect(trimLeft('  a b c   ')).to.equal('a b c   ');
    expect(trimLeft('')).to.equal('');
  });

  it('Should remove leading given characters', function() {
    expect(trimLeft('--^^]]\\abc--^^\\', '-^]\\')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', '^]\\-')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', ']\\-^')).to.equal('abc--^^\\');
    expect(trimLeft('--^^]]\\abc--^^\\', '\\-^]')).to.equal('abc--^^\\');

    expect(trimLeft('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-'))
      .to.equal('ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-');

    expect(trimLeft('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\'))
      .to.equal('XYZ[\\A\]]');

    expect(trimLeft('', '-')).to.equal('');
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var trimRight = fav.text.trimRight;

describe('fav.text.trimRight', function() {

  it('Should remove trailing white spaces', function() {
    expect(trimRight(' a ')).to.equal(' a');
    expect(trimRight(' 　abc 　 ')).to.equal(' 　abc');
    expect(trimRight(' \t abc  \n \t ')).to.equal(' \t abc');
    expect(trimRight('  a b c   ')).to.equal('  a b c');
    expect(trimRight('')).to.equal('');
  });

  it('SHould remove trailing given characters', function() {
    expect(trimRight('--^^]]\\abc--^^\\', '-^]\\')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', '^]\\-')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', ']\\-^')).to.equal('--^^]]\\abc');
    expect(trimRight('--^^]]\\abc--^^\\', '\\-^]')).to.equal('--^^]]\\abc');

    expect(trimRight('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-',
      '\\*.+?|{}()[]$^-')).to.equal('\\*.+?|{}()[]^$-ABC');

    expect(trimRight('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\'))
      .to.equal('[1-3][^BC]XYZ');

    expect(trimRight('', '-')).to.equal('');
  });

});


})();
(function(){
'use strict';


var expect = chai.expect;


var trim = fav.text.trim;

describe('fav.text.trim', function() {

  it('Should remove leading and trailng white spaces', function() {
    expect(trim(' a ')).to.equal('a');
    expect(trim(' 　abc 　 ')).to.equal('abc');
    expect(trim(' \t abc 　\n\r ')).to.equal('abc');
    expect(trim('  a b c  ')).to.equal('a b c');
    expect(trim('')).to.equal('');
  });

  it('Should remove leading and trailng given characters', function() {
    expect(trim('--^^]]\\abc--^^\\', '-^]\\')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', '^]\\-')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', ']\\-^')).to.equal('abc');
    expect(trim('--^^]]\\abc--^^\\', '\\-^]')).to.equal('abc');

    expect(trim('\\*.+?|{}()[]^$-ABC\\*.+?|{}()[]^$-', '\\*.+?|{}()[]$^-'))
      .to.equal('ABC');

    expect(trim('[1-3][^BC]XYZ[\\A\]]', '[^1-3ABC]\\')).to.equal('XYZ');

    expect(trim('', '-')).to.equal('');
  });
});


})();
(function(){
'use strict';


var expect = chai.expect;


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

})();
(function(){
'use strict';


var expect = chai.expect;


var unique = fav.text.unique;

describe('fav.text.unique : 1000 〜 1999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(1000);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(1000 + i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


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

})();
