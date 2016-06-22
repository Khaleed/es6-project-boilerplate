"use strict";

// sample code

let numbers = [1, 2, 3, 4, 5];
// double the list of numbers and filter out the even ones
console.log(numbers.map(n => n * 2)
            .filter(n => n % 2 === 0));

