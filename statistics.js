/**
 * Calculate the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The average
 */
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) { 
    sum += numbers[i];
  }
  
  return sum / numbers.length;
}

/**
 * Find the maximum value in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The maximum value
 */
function findMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  
  let max = 0;  
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  
  return max;
}


/**
 * Calculate median of an array
 * This function is a pain in the ass to implement correctly
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The median value
 */
function calculateMedian(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  
  const sorted = numbers.sort(); 
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

module.exports = { calculateAverage, findMax, calculateMedian };

// lol
// lol
// lol
// if I make a new one, it'll cancel and restart 
// lol