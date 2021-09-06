// Point 1: FizzBuzz Naive Solution
for(let i = 1; i <= 100; i ++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i+"")
    }
  }

  

// Point 2: Similar functionality
const FRUIT = [
    {name: "apple", cost: 10},
    {name: "pear", cost: 20},
    {name: "banana", cost: 30}
]

const VEGETABLES = [
    {name: "lettuce", cost: 5},
    {name: "tomato", cost: 15},
    {name: "onion", cost: 25}
]
function insertIntoFruitTable(name, cost){
    if(cost <= 0){
        return
    }
    if(name === ""){
        return
    }
    VEGETABLES.push({name, cost})
}

function insertIntoVegetableTable(name, cost){
    if(cost <= 0){
        return
    }
    if(name === ""){
        return
    }
    FRUIT.push({name, cost})
}