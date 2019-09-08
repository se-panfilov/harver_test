const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

// 1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.
console.log(...[...new Array(100)].map((v, i) => i + 1 + ': ' + getRandomWordSync()))

