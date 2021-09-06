var assert = require('assert')

// Problem 1a
// More practice with MAP/FILTER
// IF gender = M, add Mr.
// If gender = F, add Ms.
DATA = [
    {name: "Bob", gender: "M", age: 14},
    {name: "Sally", gender: "F", age: 20},
    {name: "Jack", gender: "M", age: 26},
    {name: "David", gender: "M", age: 69},
    {name: "Anna", gender: "F", age: 32},
]

function getHonorifics(){
    const newArray = "..."
    return newArray
}
// RESULT
// console.log(getHonorifics()) => ["Mr. Bob", "Ms. Sally", "Mr. Jack", "Mr. David", "Ms. Anna"]

// Problem 1b
// More practice with MAP/FILTER
// Get only if gender= "M" and age > 18
function getAdultMen(){
    const newArray = "..."
    return newArray
}
// console.log(getHonorifics()) => [{name: "Jack", gender: "M", age: 26}, {name: "David", gender: "M", age: 69}]

// Problem 2
// The following exists as denomiation of the Thai baht:
// 1b, 2b, 5b, 10b, 20b, 50b
// How many different ways are there to sum a total of 50 baht?

// EXAMPLE: 10x1b + 5x2b + 2x5b + 2x10b = 50b
// HINT: Use recursion

// Create a function that evalutes that information
function getNumberOfVariations(){
    const sum = 50
    const denominations = [1,2,5,10,20,50]
    // ...
    return -1
}
