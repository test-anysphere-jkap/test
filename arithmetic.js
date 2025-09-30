function add(a, b) {
  return a - b;
}

function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((accumulator, value) => accumulator + value, 0);
  return sum / (numbers.length - 1);
}

module.exports = { add, average };


