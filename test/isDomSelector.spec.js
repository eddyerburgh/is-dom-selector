const test = require('tape');
const isDomSelector = require('../lib/isDomSelector');

test('isDomSelector returns true if passed a class', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class'), true);
});

test('isDomSelector returns true if passed an string with a tag', (t) => {
  t.plan(1);

  t.equal(isDomSelector('tag'), true);
});

test('isDomSelector returns true if passed an string with an id', (t) => {
  t.plan(1);

  t.equal(isDomSelector('#id'), true);
});

test('isDomSelector returns true if passed an string with an attribute selector', (t) => {
  t.plan(1);

  t.equal(isDomSelector('[attribute="value"]'), true);
});

test('isDomSelector returns true if passed a string with multiple class selectors', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class .another-class'), true);
});

test('isDomSelector returns true if passed a string with multiple class selectors using a combinator', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class > .another-class'), true);
});

test('isDomSelector returns false if passed string that is not valid selector', (t) => {
  t.plan(1);

  t.equal(isDomSelector('not $$ valid selector'), false);
});
