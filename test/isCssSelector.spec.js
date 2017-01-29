const test = require('tape');
const isCssSelector = require('../lib/isCssSelector');

test('isCssSelector returns true if passed a class', (t) => {
  t.plan(1);

  t.equal(isCssSelector('.class'), true);
});

test('isCssSelector returns true if passed an string with a tag', (t) => {
  t.plan(1);

  t.equal(isCssSelector('tag'), true);
});

test('isCssSelector returns true if passed an string with an id', (t) => {
  t.plan(1);

  t.equal(isCssSelector('#id'), true);
});

test('isCssSelector returns true if passed an string with an attribute selector', (t) => {
  t.plan(1);

  t.equal(isCssSelector('[attribute="value"]'), true);
});

test('isCssSelector returns false if passed string that is not valid selector', (t) => {
  t.plan(1);

  t.equal(isCssSelector('invalidselector]'), false);
});
