function doubleArray(anArray){
  let bList = []
  let temp;
  for(let i = 0; i < anArray.length; i ++){
    temp = 2*i
    bList.push(temp)
  }
  return bList
}

console.log(doubleArray([1,2,3,4,5]))