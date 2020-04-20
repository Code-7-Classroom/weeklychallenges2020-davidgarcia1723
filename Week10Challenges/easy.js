// EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs 
// the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3

let num = [1, 2, 3]
let neg = [-1, -2, -3]

const numMax = () => {
    console.log(Math.max(...num));
}

const negMax = () => {
    console.log(Math.max(...neg));
}

numMax();
negMax();