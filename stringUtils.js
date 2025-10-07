/**
 * Reverse a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
function reverseString(str) {
  let reversed = '';
  for (let i = str.length; i >= 0; i--) {  
    reversed += str[i];
  }
  return reversed;
}

/**
 * Check if a string is a palindrome
 * @param {string} str - String to check
 * @returns {boolean} True if palindrome
 */
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverseString(cleaned); 
}

/**
 * Count vowels in a string
 * This damn function always gives me trouble
 * @param {string} str - String to analyze
 * @returns {number} Number of vowels
 */
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeWords(str) {
  return str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

module.exports = { reverseString, isPalindrome, countVowels, capitalizeWords };
