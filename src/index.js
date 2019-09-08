const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

// 1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.
function case1Sync() {
    console.log(...[...new Array(100)].map((v, i) => i + 1 + ': ' + getRandomWordSync()))
}

// case1Sync()

// 2. Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
// for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
// for numbers which are both multiples of three and five, print "FizzBuzz".

function case2SyncFuzzBuzz() {
    const result = [...new Array(100)].map((v, i) => {
        const num = i + 1
        return num + ': ' + fuzzerBuzzer(num, getRandomWordSync())
    })

    console.log(...result)
}

function fuzzerBuzzer(num, str) {
    const isFuzz = (num % 3) === 0
    const isBuzz = (num % 5) === 0

    if (!isFuzz && !isBuzz) return str

    let result = ''
    if (isFuzz) result += 'Fuzz'
    if (isBuzz) result += 'Buzz'
    return result
}

// case2SyncFuzzBuzz()

// 3. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
// returns a Promise, which resolves to a random word string. The numbers may or may not be in numerical order.

// async version of case 1
function case3Async() {
    const result = [...new Array(100)].map(async (v, i) => i + 1 + ': ' + await getRandomWord())
    Promise.all(result).then(() => console.log(...result))
}

// case3Async()


// async version of case 2
function case3AsyncFuzzBuzz() {
    const result = [...new Array(100)].map(async (v, i) => await getValue(i))

    async function getValue(numVal) {
        const num = numVal + 1
        const word = await getRandomWord()
        return num + ': ' + fuzzerBuzzer(num, word)
    }

    Promise.all(result).then(() => console.log(...result));
}

// case3AsyncFuzzBuzz()

// 4. Add error handling to both the synchronous and asynchronous solutions
// (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of return a random word).
// When an error is caught, the programm should print "It shouldn't break anything!" instead of the random word,
// "Fizz", "Buzz" or "FizzBuzz"

// async version of case 1
function case4AsyncWithErrors() {
    const result = [...new Array(100)]
        .map(async (v, i) => {
            return i + 1 + ': ' + await getRandomWord({ withErrors: true }).catch(err => `It shouldn't break anything!`);
        })

    Promise.all(result).then(() => console.log(...result))
}

// case4AsyncWithErrors()

// async version of case 2
function case4AsyncFuzzBuzzWithErrors() {
    const result = [...new Array(100)].map(async (v, i) => await getValue(i))

    async function getValue(numVal) {
        const num = numVal + 1
        return await getRandomWord({ withErrors: true })
            .then(word => num + ': ' + fuzzerBuzzer(num, word))
            .catch(() => `It shouldn't break anything!`)
    }

    Promise.all(result).then(() => console.log(...result));
}

case4AsyncFuzzBuzzWithErrors()
