// Problem 2: Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.


function fiboEvenSum(n) {
  let evenSum = 0
  let fibNumArr = fib(n-1)
  for (let num of fibNumArr) {
   switch(true) {
     case num % 2 === 0: 
      evenSum = evenSum + num
      break
     default: 
      break
   }
 }
 return evenSum
}

function fib(n) {
  let fibNumArr = []
  fibNumArr[0] = 1
  fibNumArr[1] = 2
  for (let i = 2; i <= n; i++) {
    fibNumArr[i] = fibNumArr[i - 1] + fibNumArr[i - 2]
  }
  return fibNumArr
}


//* TEST
// fiboEvenSum(10) should return 44.
// fiboEvenSum(18) should return 3382.
// fiboEvenSum(23) should return 60696.
// fiboEvenSum(43) should return 350704366.
// Your function should return an even value.