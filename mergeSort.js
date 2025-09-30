// This merge is shit FUCK

function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('mergeSort expects an array');
  }
  if (arr.length <= 1) {
    return arr.slice();
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }
  return result;
}

module.exports = { mergeSort };


