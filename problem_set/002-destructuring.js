const successObject = {
  headers: {
    "access-control": true,
  },
  status: 200,
  request: {
    response: "foobar"
  },
  data: {
    page_number: 0,
    page_size: 10,
    results: [
      {name: "A", age: 5},
      {name: "B", age: 12},
      {name: "C", age: 18},
      {name: "D", age: 24}
    ]
  }
}

const failedObject = {
  headers: {
    "access-control": true,
  },
  status: 404,
  request: {
    response: "foobar",
    error: {
      errorCode: 403,
      message: "There is an error with result"
    }
  },
  data: undefined
}

const errorMessage = successObject.request.error?.message;
const value = 5 < 3 ? "A" : "B"
console.log(value)

// if(successObject.request.error !== undefined){
//   console.log(successObject.request.error.message);
// } else {
//   console.log("No valid error message")
// }

// console.log('5' === '4')

const aList = [1,2,3,4,5]
// const bList = []
// for(const b of aList){
//   bList.push(b*2)
// }
// console.log(bList)
function double(a){
  return a*2
}
// const bList = aList.map(double)
// const doubleArray = (e) => {return e*2}
const bList = aList.map((e)=> {return e%2 === 0})
console.log(bList)
