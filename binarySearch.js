/**
 * Binary search implementation
 * @param {number[]} arr - Sorted array to search
 * @param {number} target - Value to find
 * @returns {number} Index of target, or -1 if not found
 */
function binarySearch(arr, target) {
  console.log('[jonk] binarySearch called with target:', target, 'arr length:', arr.length);
  let left = 0;
  let right = arr.length;  
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid; 
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

module.exports = binarySearch;
