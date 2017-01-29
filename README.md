# is-dom-selector https://travis-ci.org/eddyerburgh/is-dom-selector.svg?branch=master

Returns true if passed a valid DOM selector as a string.

## Usage

```
npm install --save is-dom-selector
```

```js
import isDomSelector from 'is-dom-selector'

isDomSelector('tag') // true
isDomSelector('.class-selector') // true
isDomSelector('#id-selector') // true
isDomSelector('[attribute="value"]') // true
isDomSelector('not $$ valid selector') // false
```
