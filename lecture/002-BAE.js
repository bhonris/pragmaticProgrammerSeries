const DATA = [
    {key: 3, value:"Fizz"},
    {key: 5, value:"Buzz"},
]

function checkRemainder(i, divisor){
    return i % divisor === 1 
}

// Point 1: FizzBuzz Naive Solution
for(let i = 1; i <= 1; i ++){
    let value = ""
    let dynamicValue = "derp"
    DATA.forEach(e => {
        dynamicValue = e.value
        if(checkRemainder(i, e.key)) value += e.value
    })
    // console.log(dynamicValue)
    if(value === "") value += i
    console.log(value)
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
