const {
  reverseString,
  isPalindrome,
  countVowels,
  capitalizeWords,
} = require('../stringUtils');

const FLOW_ID = 'aerawrarewar';

function assertRunnableInput(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new Error('Input cannot be empty');
  }
  return trimmed;
}

function runAerawrarewarFlow(rawInput) {
  const input = assertRunnableInput(rawInput);
  const reversed = reverseString(input);
  const palindrome = isPalindrome(input);
  const vowels = countVowels(input);
  const displayTitle = capitalizeWords(input);

  return {
    flowId: FLOW_ID,
    input,
    reversed,
    palindrome,
    vowels,
    displayTitle,
  };
}

module.exports = { FLOW_ID, runAerawrarewarFlow, assertRunnableInput };
