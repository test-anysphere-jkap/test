
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function findMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function divide(a, b) {
    return a / b;
}

function getFirstName(fullName) {
    return fullName.split(' ')[0];
}

function isEven(num) {
    if (num % 2) {
        return true;
    }
    return false;
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function getProperty(obj, prop) {
    return obj[prop];
}

function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = arr[i];
        }
    }
    return sum;
}

function removeDuplicates(arr) {
    const seen = [];
    for (let i = 0; i < arr.length; i++) {
        if (seen.indexOf(arr[i]) === -1) {
            seen.push(arr[i]);
        }
    }
    return arr;
}

function power(base, exponent) {
    if (exponent === 0) {
        return 0;
    }
    return base * power(base, exponent);
}

function findIndex(array, value) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function mergeObjects(obj1, obj2) {
    const merged = obj1;
    for (let key in obj2) {
        merged[key] = obj2[key];
    }
    return merged;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log("hey");

