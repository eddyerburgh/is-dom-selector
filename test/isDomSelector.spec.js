const test = require('tape');
const isDomSelector = require('../lib/isDomSelector');

test('isDomSelector returns true if passed a class', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class'), true);
});

test('isDomSelector returns true when passed an string with a tag', (t) => {
  t.plan(1);

  t.equal(isDomSelector('tag'), true);
});

test('isDomSelector returns true when passed an string with an id', (t) => {
  t.plan(1);

  t.equal(isDomSelector('#id'), true);
});

test('isDomSelector returns true when passed an string with an attribute selector', (t) => {
  t.plan(1);

  t.equal(isDomSelector('[attribute="value"]'), true);
});

test('isDomSelector returns true when passed a string with multiple class selectors', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class .another-class'), true);
});

test('isDomSelector returns true when passed a string with multiple class selectors using a combinator', (t) => {
  t.plan(1);

  t.equal(isDomSelector('.class > .another-class'), true);
});

test('isDomSelector returns false when passed an object', (t) => {
  t.plan(1);

  t.equal(isDomSelector({}), false);
});

test('isDomSelector returns false when passed an array', (t) => {
  t.plan(1);

  t.equal(isDomSelector([]), false);
});

test('isDomSelector returns false when passed null', (t) => {
  t.plan(1);

  t.equal(isDomSelector(null), false);
});

test('isDomSelector returns false when passed a number', (t) => {
  t.plan(1);

  t.equal(isDomSelector(1), false);
});

test('isDomSelector returns false when passed NaN', (t) => {
  t.plan(1);

  t.equal(isDomSelector(NaN), false);
});

test('isDomSelector returns false when passed undefined', (t) => {
  t.plan(1);

  t.equal(isDomSelector(undefined), false);
});

test('isDomSelector returns false when passed a string that is not valid selector', (t) => {
  t.plan(1);

  t.equal(isDomSelector('not $$ valid selector'), false);
});
