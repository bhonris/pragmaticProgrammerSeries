// JSON Object
// J ava
// S cript
// O ject
// N otation
const dog = {
  name: "Fido",
  age: 4,
  legs: 4,
  eye: 2
}
// const name = dog.name
// const age = dog['age']
const {name: dogName = "unknown", age: year = 0} = dog

const dogName = dog.name ? dog.name : "unknown";
const year = dog.age ? dog.age : 0;



