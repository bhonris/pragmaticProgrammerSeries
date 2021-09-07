// 1. Fibonacci Numbers
function fibonacciNumberMemo(n, memo = new Map()){
    if(n < 2) return 1
    const value = memo.get(n)
    if(value) return value
    const result = fibonacciNumber(n-1, memo) + fibonacciNumber(n-2, memo)
    memo.set(n, result)
    return result
}

function fibonacciNumber(n){
    if(n < 2) return 1
    const result = fibonacciNumber(n-1) + fibonacciNumber(n-2)
    return result
}
const val = 50
const now = new Date().getTime();
const answer = fibonacciNumberMemo(val)
const end = new Date().getTime() - now
console.log(`Fibonacci Value w/ Memo of F(${val}) is ${answer}. Took ${end} ms`)

const now2 = new Date().getTime();
const answer2 = fibonacciNumber(val)
const end2 = new Date().getTime() - now
console.log(`Fibonacci Value of F(${val}) is ${answer2}. Took ${end2} ms`)

// fibonacciNumber(5)
// fibonacciNumber(4)                       + fibonacciNumber(3)
// fibonacciNumber(3) + fibonacciNumber(2)
// Dynamic Programming: 



// F(N) = F(N-1) + F(N-2)
// where F(0) = F(1) = 1
// 1,1,2,3,5,8,13,21,34,...
// fibonacciNumber(2) = 2
// fibonacciNumber(4) = 5
console.log('asdfadf')

// noodle 50 baht
// const denominations [1,2,5,10,20,50]
// Ink: 50 baht, 20 20 10