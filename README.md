# is-dom-selector

Returns true if passed a valid DOM selector as a string.

## Usage

```js
import isDomSelector from 'is-dom-selector'

isDomSelector('tag') // true
isDomSelector('.class-selector') // true
isDomSelector('#id-selector') // true
isDomSelector('[attribute="value"]') // true
isDomSelector('not $$ valid selector') // false
```
