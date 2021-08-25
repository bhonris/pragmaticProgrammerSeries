// Method 1: Naive Solution
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

// Method 2: Fine Refactoring
for(let i = 1; i <= 200; i ++){
  let aString = ""
  if(i % 3 === 0) aString += "Fizz"
  if(i % 5 === 0) aString += "Buzz"
  if(i % 7 === 0) aString += "Bozo"
  if(i % 11 === 0) aString += "Derp"
  if(i % 13 === 0) aString += "Darp"
  if(i % 17 === 0) aString += "Herp"
  if(i % 69 === 0) aString += "asdf"

  if(aString === "") aString = i
  console.log(aString)
}

// Method 3: DRY refactoring

const valueKey = [
  {key: 3, value: "Fizz" },
  {key: 5,value: "Buzz"},
  {key: 7,value: "Bozo"},
  {key: 11,value: "Derp"},
  {key: 13,value: "Darp"},
  {key: 17,value: "Herp"},
  {key: 69,value: "asdf"}
]
for(let i = 1; i <= 200; i ++){
  let aString = ""
  valueKey.forEach(pair => {
    if(i % pair.key === 0 ) aString += pair.value
  })
  if(aString === "") aString = i
  console.log(aString)
}
