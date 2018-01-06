# [@fav/text][repo-url] [![Github.io][io-img]][io-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Function set of text manipulations for all versions of nodejs and major browsers.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text
```


***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text` directory manually.*


## Usage

For Node.js:

```js
const text = require('@fav/text');

const repeat = text.repeat;
repeat('abc', 3); // => 'abcabcabc'
```

For Web browsers:

```html
<script src="fav.text.min.js"></script>
<script>
var repeat = fav.text.repeat;
repeat('abc', 3); // => 'abcabcabc'
</script>
```


## API

This package provides API documents on [Github.io][api-url] or `docs/index.html` in this package.


## Checked

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (0.8〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:| 
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text/
[api-url]: https://sttk.github.io/fav-text/index.html
[io-img]: http://img.shields.io/badge/API-github.io-ff99cc.svg
[io-url]: https://sttk.github.io/fav-text/index.html
[npm-img]: https://img.shields.io/badge/npm-v1.0.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text?branch=master
