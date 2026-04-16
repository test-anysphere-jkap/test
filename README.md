# idk anything

Small JavaScript utilities (binary search, statistics, string helpers) plus a few scratch scripts.

## Documentation

- **[User guide](docs/USER_GUIDE.md)** — how to import each module, what each function is for, and runnable examples.

## Quick start

From the repo root, using Node.js:

```javascript
const binarySearch = require('./binarySearch');
const { calculateAverage } = require('./statistics');
const { capitalizeWords } = require('./stringUtils');

console.log(binarySearch([1, 2, 3, 4], 3));
console.log(calculateAverage([10, 20, 30]));
console.log(capitalizeWords('idk anything'));
```

```bash
node math1231.js
```
