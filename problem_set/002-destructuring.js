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
  status: 200,
  request: {
    response: "foobar",
    error: "There is an error with result"
  },
  data: undefined
}
