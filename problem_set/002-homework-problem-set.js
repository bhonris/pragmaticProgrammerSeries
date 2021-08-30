const numbers = [2,5,4,8,9,11,10]
// 1 
// Map and Filter Review 
// Consumes a list of numbers
// And selects only the numbers that are prime
// Then double all those numbers
// Returns a list
function doublePrimeNumbers(anArray){
  return []
}
const processedNumbers = doublePrimeNumbers(numbers)
// Expected Value: [4, 10, 22]


// 2
// Reduce 
// Use the javascript  built-in function 'reduce' to find the max value of a list
function findMax(anArray){
  return 0
}
const maxNumber = findMax(anArray)
// Expected Value 11


// 3 
// Recursion
// Fibonacci
// Create a function that consumes a number, and returns the fibonacci number of that order
function getFibonacci(n){

}
// getFibonacci(0)  => 0
// getFibonacci(1)  => 1
// getFibonacci(2)  => 1
// getFibonacci(3)  => 2
// getFibonacci(4)  => 3
// getFibonacci(5)  => 5
// getFibonacci(11) => 89


// 4
// Objects in Arrays 
// List out all the object's name in the array in which the quantity is less than 100  
const materialList = [
  {name: "mat a",
   quantity: 80
  },
  {name: "mat b",
   quantity: 90
  },
  {name: "mat c",
   quantity: 99
  },
  {name: "mat d",
   quantity: 101
  },
  {name: "mat e",
   quantity: 100
  }
]
// Hint: Use filter and map
function getLessThan100List(alist){
  //...
  return []
}
// getLessThan100List(materialList) =>
// ["mat a", "mat b", "mat c"]


// 5 
// Sorting
// Sort the array from low to high
function sortArray(anArray){
  // ...
  return anArray
}
// sortArray([4,1,8,5]) => [1,4,5,8]
// sortArray([2,87,4,1] => [1,2,4,87])
// sortArray([2,2,6,2,8] => [2,2,2,6,8])
