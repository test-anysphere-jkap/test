const test = require('node:test');
const assert = require('node:assert/strict');
const { FLOW_ID, runAerawrarewarFlow } = require('../flows/aerawrarewarFlow');

test('aerawrarewar flow: happy path for canonical sample', () => {
  const sample = 'aerawrarewar';
  const result = runAerawrarewarFlow(sample);

  assert.equal(result.flowId, FLOW_ID);
  assert.equal(result.flowId, 'aerawrarewar');
  assert.equal(result.input, 'aerawrarewar');
  assert.equal(result.reversed, 'rawerarwarea');
  assert.equal(result.palindrome, false);
  assert.equal(result.vowels, 6);
  assert.equal(result.displayTitle, 'Aerawrarewar');
});

test('aerawrarewar flow: happy path trims surrounding whitespace', () => {
  const result = runAerawrarewarFlow('  aerawrarewar  ');

  assert.equal(result.input, 'aerawrarewar');
  assert.equal(result.vowels, 6);
});

test('aerawrarewar flow: happy path handles multi-word phrase for display title', () => {
  const result = runAerawrarewarFlow('aerawrarewar flow demo');

  assert.equal(result.input, 'aerawrarewar flow demo');
  assert.equal(result.displayTitle, 'Aerawrarewar Flow Demo');
  assert.equal(result.palindrome, false);
});

test('aerawrarewar flow: happy path palindrome with punctuation ignored', () => {
  const result = runAerawrarewarFlow('Race car!');

  assert.equal(result.palindrome, true);
  assert.equal(result.vowels, 3);
});

test('aerawrarewar flow: error when input is not a string', () => {
  assert.throws(() => runAerawrarewarFlow(null), TypeError);
  assert.throws(() => runAerawrarewarFlow(undefined), TypeError);
  assert.throws(() => runAerawrarewarFlow(42), TypeError);
  assert.throws(() => runAerawrarewarFlow({ text: 'a' }), TypeError);
});

test('aerawrarewar flow: error when input is empty or whitespace only', () => {
  assert.throws(() => runAerawrarewarFlow(''), (err) => {
    assert.equal(err.message, 'Input cannot be empty');
    return true;
  });
  assert.throws(() => runAerawrarewarFlow('   \t\n  '), (err) => {
    assert.equal(err.message, 'Input cannot be empty');
    return true;
  });
});

test('aerawrarewar flow: edge case single character', () => {
  const result = runAerawrarewarFlow('a');

  assert.equal(result.reversed, 'a');
  assert.equal(result.palindrome, true);
  assert.equal(result.vowels, 1);
  assert.equal(result.displayTitle, 'A');
});

test('aerawrarewar flow: edge case unicode letters preserved in reversal', () => {
  const result = runAerawrarewarFlow('café');

  assert.equal(result.reversed, 'éfac');
  assert.equal(result.vowels, 1);
});

test('aerawrarewar flow: edge case mixed casing does not change palindrome outcome', () => {
  const lower = runAerawrarewarFlow('aerawrarewar');
  const mixed = runAerawrarewarFlow('AeRaWrArEwAr');

  assert.equal(mixed.input, 'AeRaWrArEwAr');
  assert.equal(mixed.palindrome, lower.palindrome);
  assert.equal(mixed.vowels, lower.vowels);
});

test('aerawrarewar flow: edge case digits only are palindrome with zero vowels', () => {
  const result = runAerawrarewarFlow('12321');

  assert.equal(result.palindrome, true);
  assert.equal(result.vowels, 0);
});
