const test = require('tape');
const isCssSelector = require('../lib/isCssSelector');

test('returns true if passed a class', (t) => {
  t.plan(1);

  t.equal(isCssSelector('.class'), true);
});
