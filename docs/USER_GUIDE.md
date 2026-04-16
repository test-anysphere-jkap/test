# idk anything — user guide

This repository is the **idk anything** toolkit: small, standalone JavaScript helpers you can copy into a project or load with Node.js. There is no package manifest; treat each file as its own mini-module.

## Prerequisites

- [Node.js](https://nodejs.org/) (any recent LTS is fine) if you want to `require()` the modules from another script.

## Repository layout

| Area | File | Role |
| --- | --- | --- |
| Search | `binarySearch.js` | Binary search on a sorted array |
| Numbers | `statistics.js` | Averages, max, median |
| Text | `stringUtils.js` | Reverse, palindrome, vowels, title-style words |
| Scratch / demos | `math1231.js`, `test.js` | Example logic and console demos; not set up as reusable modules |

The sections below focus on the three files that export a public API.

---

## Binary search (`binarySearch.js`)

**Purpose:** Find the index of a value in a **sorted** array of numbers.

**Import:**

```javascript
const binarySearch = require('./binarySearch');
```

**Example:**

```javascript
const scores = [10, 20, 30, 40, 50];
const index = binarySearch(scores, 30);
console.log(index); // 2
```

**Contract:**

- `arr` must be sorted in ascending order before you call `binarySearch`.
- Returns the index of `target`, or `-1` if the value is not found.

**Note:** The implementation logs debug lines to the console (prefixed with `[jonk]`) on each call.

---

## Statistics (`statistics.js`)

**Purpose:** Basic numeric summaries on arrays.

**Import:**

```javascript
const { calculateAverage, findMax, calculateMedian } = require('./statistics');
```

### `calculateAverage(numbers)`

Averages the elements of `numbers`. For an empty array, returns `0`.

```javascript
calculateAverage([]); // 0
```

With the current implementation, a typical non‑empty array can yield `NaN` because the summation loop walks one index past the last element. Treat the result as unreliable until that loop is corrected.

### `findMax(numbers)`

Returns the largest number in the array, or `null` if the array is empty.

```javascript
findMax([3, 9, 1]); // 9
findMax([]);       // null
```

If every value in the array is negative, the function still compares against an initial value of `0`, so the returned “maximum” may be `0` even though it does not appear in the array.

```javascript
findMax([-5, -2, -9]); // 0 (not -2)
```

### `calculateMedian(numbers)`

Returns the median value, or `null` if the array is empty. For an even number of elements, the median is the average of the two middle values after ordering.

```javascript
calculateMedian([1, 3, 3]);     // 3
calculateMedian([1, 2, 3, 4]);  // 2.5
```

---

## String utilities (`stringUtils.js`)

**Purpose:** Common string transforms and checks.

**Import:**

```javascript
const {
  reverseString,
  isPalindrome,
  countVowels,
  capitalizeWords,
} = require('./stringUtils');
```

### `reverseString(str)`

Returns the characters of `str` in reverse order.

```javascript
reverseString('hello'); // e.g. "undefined" + reversed tail — see note below
```

The loop that walks the string currently reads index `str.length` on the first iteration, which is out of range in JavaScript strings (valid indices are `0` … `length - 1`). Expect an extra `"undefined"` at the start of the result until that loop is fixed.

### `isPalindrome(str)`

Treats letters and digits only (case-insensitive), ignores spaces and punctuation, then checks whether the cleaned string reads the same forwards and backwards.

```javascript
isPalindrome('racecar'); // false with the current reverseString helper
```

Because `isPalindrome` delegates to `reverseString`, palindrome detection does not match the intended behavior until `reverseString` is corrected.

### `countVowels(str)`

Counts `a`, `e`, `i`, `o`, `u` in either case.

```javascript
countVowels('Hello'); // 2
```

### `capitalizeWords(str)`

Splits on spaces and capitalizes the first character of each word; remaining letters in each word are lowercased.

```javascript
capitalizeWords('hello WORLD'); // 'Hello World'
```

---

## Running the demo script

`math1231.js` is written as a runnable script (merge sort demo and sample calls). From the repository root:

```bash
node math1231.js
```

Use it as a reference for how sorting and arithmetic helpers might be wired together in a throwaway file; it is not exported like the modules above.

---

## Design notes

- **No bundler:** These files use CommonJS (`module.exports` / `require`) so they work with plain Node.js.
- **Single responsibility:** Keep each concern in its own file when you extend the toolkit.
- **Sorted input for search:** Binary search only behaves predictably when the input array is already ordered.

For changes to this guide, edit `docs/USER_GUIDE.md` and keep examples aligned with the actual exports in each file. When you fix a bug in the source, update the corresponding paragraph and sample output here.
