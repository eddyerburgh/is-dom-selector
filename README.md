# is-dom-selector [![CircleCI](https://circleci.com/gh/eddyerburgh/is-dom-selector/tree/master.svg?style=shield)](https://circleci.com/gh/eddyerburgh/is-dom-selector/tree/master)

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
