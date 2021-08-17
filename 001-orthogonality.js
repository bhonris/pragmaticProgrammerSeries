/*
Principal of Orthogonality
Consider a car
 Wheels: Turning left/right
 Pedal: Accelerating
 Brakes: Deccelerating
 Gear Stick: Gear shifting/selection
KEY PRINCIPAL: Each mechanism is responsible for one purpose.
Suppose we have a car that does the following:
 Wheels:
   if rotate clockwise: turn right and decelerate
   if rotate anti-clockwise: turn left and accelerate
 Pedals: 
   if current speed > 50, shift gear up
   if current speed < 50, shift gear down
 Breaks: 
   breaks and turns on wind shield wipers
It would be much harder to control. 

This is the principal of orthogonality:
 revisiting Key Princial:Each method/function should be responsible for one purpose. This translates into LOW COUPLING
*/

// Example of VERY BAD CODE:
let a = 0;
let b = 0;

function badFunction1(num){
  a += 1*num
  b += 2*num
}

function badFunction2(num){
 a += 2*num
 b += 1*num
}

// Let's say you can only call each of these functions once. How do you set 
// a = 1 and b = 5
const num1 = 3; // add value here INTEGERS ONLY
const num2 = -1; // add value here INTEGERS ONLY
badFunction1(num1)
badFunction2(num2)
console.log(`Expect value of a to equal 1. Received:  ${a}`)
console.log(`Expect value of b to equal 5. Received:  ${b}`)

// Answer: 
//
//
//
//
//
//
// num1 = 3; num2 = -1

// On the other hand an example of orthogonal coding
let c = 0;
let d = 0;

function goodFunction1(num){
  c += num
}

function goodFunction2(num){
 d += num
}

// Let's say you can only call each of these functions once. How do you set 
// c = 420 and d = 69
const num3 = undefined; // add value here INTEGERS ONLY
const num4 = undefined; // add value here INTEGERS ONLY
goodFunction1(420)
goodFunction2(69)
console.log(`Expect value of c to equal 420. Received:  ${c}`)
console.log(`Expect value of d to equal 69. Received:  ${d}`)
// Answer is trivial


// For a more applicable problem
const status = {
  loading: false
}


function loadingComponent(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms) {
 // duplicate function for the sake of clarity
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadA() {
  console.log("Start loadA");
  status.loading = true;
  await loadingComponent(Math.floor(Math.random() * 3000));
  status.loading = false;
  console.log("Finish loadA");
}

async function loadB() {
  console.log("Start loadB");
  status.loading = true;
  await loadingComponent(Math.floor(Math.random() * 3000));
  status.loading = false;
  console.log("Finish loadB");
}

function allowUserInteraction(){
  return !status.loading
}
async function waitToFinishLoading(){
  console.log("wait for finish loading");
  while(!allowUserInteraction()){
    await sleep(500)
  }
  console.log("Allowing user interaction");

}
loadB();
loadA();
waitToFinishLoading();

const status2 = {
  loadingC: false,
  loadingD: false
}

async function loadC() {
  console.log("Start loadC");
  status2.loadingC = true;
  await loadingComponent(Math.floor(Math.random() * 3000));
  status2.loadingC = false;
  console.log("Finish loadC");
}

async function loadD() {
  console.log("Start loadD");
  status.loadingD = true;
  await loadingComponent(Math.floor(Math.random() * 3000));
  status.loadingD = false;
  console.log("Finish loadD");
}

function allowUserInteraction2(){
  return !status.loadingC && !status.loadingD
}
async function waitToFinishLoading2(){
  console.log("wait for finish loading 2");
  while(!allowUserInteraction2()){
    await sleep(500)
  }
  console.log("Allowing user interaction 2");

}
loadC();
loadD();
waitToFinishLoading();



// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//   console.log('Taking a break...');
//   await sleep(2000);
//   console.log('Two seconds later, showing sleep in a loop...');

//   // Sleep in loop
//   for (let i = 0; i < 5; i++) {
//     if (i === 3)
//       await sleep(2000);
//     console.log(i);
//   }
// }

// demo();