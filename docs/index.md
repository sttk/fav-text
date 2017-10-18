# [@fav/text][repo-url] ver. 0.1.0 - API document

----

### <u>escape : object</u>

Is a set of functins to escape characters in a string.

This function set provides escapings for following syntaxes and formats:

- [RegExp](#regexp)
- [RegExpCharClass](#regexp_charclass)

**NOTE:** The functions in this set doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

<a name="regexp"></a>

#### <u>escape\['RegExp'\](source) : string</u>

Escape special characters of Regular Expression.

The special characters which are escaped are as follows: `^$\.*+?()[]{}|`.

The specification of the special characters of Regular Expression comes from [ECMA-262 — 21.2 RegExp (Regular Expression) Objects](http://ecma-international.org/ecma-262/7.0/#sec-patterns).

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string


<a name="regexp_charclass"></a>

#### <u>escape\['RegExpCharClass'\](source) : string</u>

Escape special characters of Regular Expression Character Class.

The special characters which are escaped are as follows: `-^]\`.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string


----
### <u>pad(source [, length ] [, padding ]) : string</u>

Pads *padding* on left and right sides of *source* to center it.

If *length* is less than the length of *source*, return *source* with no padding.

If *padding* is not specified, this function use a white space (`'\u0020'`) as a padding.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.


#### Parameter:

| Parameter |  Type  | Description                      |
|-----------|--------|----------------------------------|
| source    | string | The source string.               |
| length    | number | The length of the result text. (Optional, and `source.length` in default.) |
| padding   | string | The padding characters. (Optional, and `' '` in default.) |

#### Return:

The padded string.

**Type:** string


----
### <u>padLeft(source, [, length ] [, padding ]) : string</u>

Pads *padding* on left side of *source*.

If *length* is less than the length of *source*, return *source* with no padding.

If *padding* is not specified, this function use a white space (`'\u0020'`) as a padding.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data type.


#### Parameter:

| Parameter |  Type  | Description                      |
|-----------|--------|----------------------------------|
| source    | string | The source string.               |
| length    | number | The length of the result text. (Optional, and `source.length` in default.) |
| padding   | string | The padding characters. (Optional, and `' '` in default.) |

#### Return:

The padded string.

**Type:** string


----
### <u>padRight(source, [, length ] [, padding ]) : string</u>

Pads *padding* on right side of *source*.

If *length* is less than the length of *source*, return *source* with no padding.

If *padding* is not specified, this function use a white space (`'\u0020'`) as a padding.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data type.


#### Parameter:

| Parameter |  Type  | Description                      |
|-----------|--------|----------------------------------|
| source    | string | The source string.               |
| length    | number | The length of the result text. (Optional, and `source.length` in default. |
| padding   | string | The padding characters. (Optional, and `' '` in default. |

#### Return:

The padded string.

**Type:** string


----
### <u>repeat(source, ntimes) : string</u>

Repeat *source* *ntimes* times.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| source    | string | The string to repeat.    |
| ntimes    | number | The number of times to repeat. |

#### Return:

The repeated string.

**Type:** string


----
### <u>trim(source [, chars]) : string</u>

Remove leading and trailing white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Return:

The trimmed string.

**Type:** string


----
### <u>trimLeft(source [, chars]) : string</u>

Remove leading white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Return:

The trimmed string.

**Type:** string


----
### <u>trimRight(source [, chars]) : string</u>

Remove trailing white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Return:

The trimmed string.

**Type:** string


----
<a name="unique"></a>

### <u>unique() : string</u>

Returns an unique string in the application.

This unique string is not fixed-length and uses characters: `a-z0-9`.

This function creates an unique string with following methods:

```
new Date().getTime().toString(36) + <sequencial-number-in-application>.toString(36)
```

***NOTE:*** *On a browser, the string returned by this function is unique in only the window.*

#### Return:

An unique string in the application.

**Type:** string


----
[repo-url]: https://github.com/sttk/fav-text/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT

