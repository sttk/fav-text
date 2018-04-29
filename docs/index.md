# [@fav/text][repo-url] ver. 1.1.1 API document

----

### <u>camelCase(text) : string</u>

Converts a string into camel case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a camel case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word. (At a result, this function returns a string converted into lower case, e.g. `abc123`).

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into camel case.

**Type:** string

#### <u>camelCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array


#### <u>camelCase.join(words) : string</u>

Joins alphanumeric words and creates a camel case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A camel case string.

**Type:** string


----
### <u>constantCase(text) : string</u>

Converts a string into constant case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a constant case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word. (At a result, this function returns a string converted into upper case, e.g. `ABC123`).

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into constant case.

**Type:** string


#### <u>constantCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array


#### <u>constantCase.join(words) : string</u>

Joins alphanumeric words and creates a constant case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A constant case string.

**Type:** string


----
### <u>endsWith(string, target [, length]) : boolean</u>

Checks if *string* ends with *target*.
If *length* is specified, this function ends comparison at index `length - 1`.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter    |  Type  | Description                               |
|--------------|:------:|-------------------------------------------|
| *string*     | string | The string to be checked.                 |
| *target*     | string | The string to search for.                 |
| *startIndex* | number | The index to search from.                 | 

#### Return:

True, if *string* ends with *target*, otherwise false.

**Type:** boolean


----
### <u>escape : object</u>

Is a set of functins to escape characters in a string.

This function set provides escapings for following syntaxes and formats:

- [RegExp](#regexp)
- [RegExpCharClass](#regexp_charclass)
- [HtmlEntity](#html_entity)
- [HtmlAttribute](#html_attribute)

In addition, the factory functions for two types of escaping are provided:

- [byProposition](#by_proposition)
- [byReplacement](#by_replacement)

**NOTE:** These functions doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

<a name="regexp"></a>

#### <u>escape.RegExp(source) : string</u>

Escapes special characters of Regular Expression.

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

#### <u>escape.RegExpCharClass(source) : string</u>

Escapes special characters of Regular Expression Character Class.

The special characters which are escaped are as follows: `-^]\`.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string

#### <u>escape.HtmlEntity(source) : string</u>

Escapes special characters of HTML entity to character references, etc.

The escape mapping for HTML entity is as follows:

|  source character | replaced text |
|:-----------------:|:-------------:|
| `'<'` (\u003c)    | `'&lt;'`      |
| `'>'` (\u003e)    | `'&gt;'`      |
| `'&'` (\u0026)    | `'&amp;'`     |
| `' '` (\u0020)    | `'&nbsp;'`    |
| `'\n'` (\u000a)   | `'<br/>'`     |

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string

#### <u>escape.HtmlAttribute(source) : string</u>

Escapes special characters of HTML attributes to character references.

The escape mapping for HTML attribute is as follows:

|  source character | replaced text |
|:-----------------:|:-------------:|
| `'<'` (\u003c)    | `'&lt;'`      |
| `'>'` (\u003e)    | `'&gt;'`      |
| `'&'` (\u0026)    | `'&amp;'`     |
| `'"'` (\u0022)    | `'&quot;'`    |
| `"'"` (\u0027)    | `'&apos;'`    |

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| source    | string | The source string.                         |

##### Return:

An escaped string.

**Type:** string

#### <u>escape.byPreposition(escapingChar [, ...escapedChars]) : function</u>

Creates an escape function which escapes special characters by preposition of an espacing character, for example:

```js
var escape = fav.text.escape.byPreposition('\\', '"\'');
escape('escaping ", \' and \\.');
// => 'escaping \\", \\\' and \\\\.'
```

##### Parameter:

| Parameter    |  Type  | Description                                              |
|--------------|:------:|----------------------------------------------------------|
| escapingChar | string | The escaping character placed before special characters. This character is escaped, too. |
| escapedChars | string | The special characters to be escaped.                    |

##### Return:

An escaping function.

**Type:** function

#### <u>escape.byReplacement(escapingMap) : function</u>

Creates an escape function which escapes special characters by replacement to corresponding strings, for examples:

```js
var escape = fav.text.escape.byReplacement({ '"': '&quot;', "'": '&apos;' });
escape('escaping " and  \'.');
// => 'escaping &quot; and &apos;.'
```

##### Parameter:

| Parameter    |  Type  | Description                                              |
|--------------|:------:|----------------------------------------------------------|
| escapingMap  | object | The plain object of which keys and values are mappings of escaped characters and replaced strings.  |

##### Return:

An escaping function.

**Type:** function


----
### <u>kebabCase(text) : string</u>

Converts a string into kebab case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a kebab case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word. (At a result, this function returns a string converted into lower case, e.g. `abc123`).

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into kebab case.

**Type:** string


#### <u>kebabCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array

#### <u>kebabCase.join(words) : string</u>

Joins alphanumeric words and creates a kebab case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A kebab case string.

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

**NOTE:** This function is different from `String#padStart` at the point that this function uses a white space (`'\u0020'`) as *padding* when specified `null` or an empty string to *padding*.

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

**NOTE:** This function is different from `String#padEnd` at the point that this function uses a white space (`'\u0020'`) as *padding* when specified `null` or an empty string to *padding*.

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
### <u>pascalCase(text) : string</u>

Converts a string into pascal case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a pascal case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into pascal case.

**Type:** string


#### <u>pascalCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array


#### <u>pascalCase.join(words) : string</u>

Joins alphanumeric words and creates a pascal case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A pascal case string.

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
### <u>snakeCase(text) : string</u>

Converts a string into snake case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a snake case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word. (At a result, this function returns a string converted into lower case, e.g. `abc123`).

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into snake case.

**Type:** string


#### <u>snakeCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array


#### <u>snakeCase.join(words) : string</u>

Joins alphanumeric words and creates a snake case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A snake case string.

**Type:** string


----
### <u>startsWith(string, target [, startIndex]) : boolean</u>

Checks if *string* starts with *target*.
If *startIndex* is specified this function starts comparison from *startIndex*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter    |  Type  | Description                               |
|--------------|:------:|-------------------------------------------|
| *string*     | string | The string to be checked.                 |
| *target*     | string | The string to search for.                 |
| *startIndex* | number | The index to search from.                 | 

#### Return:

True, if *string* starts with *target*, otherwise false.

**Type:** boolean


----
### <u>trim(source [, chars]) : string</u>

Removes leading and trailing white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter |  Type  | Description        |
|-----------|:------:|--------------------|
| source    | string | The source string. |
| chars     | string | The characters to be trimmed. (Optional, and white space in default.) |

#### Return:

The trimmed string.

**Type:** string


----
### <u>trimLeft(source [, chars]) : string</u>

Removes leading white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter |  Type  | Description        |
|-----------|:------:|--------------------|
| source    | string | The source string. |
| chars     | string | The characters to be trimmed. (Optional, and white space in default.) |

#### Return:

The trimmed string.

**Type:** string


----
### <u>trimRight(source [, chars]) : string</u>

Removes trailing white spaces or *chars* from *source*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter |  Type  | Description        |
|-----------|:------:|--------------------|
| source    | string | The source string. |
| chars     | string | The characters to be trimmed. (Optional, and white space in default.) |

#### Return:

The trimmed string.

**Type:** string


----
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

