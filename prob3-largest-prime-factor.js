// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let i = 2
  while (i <= number) {
    if (number % i === 0) {
      number /= i
    } else {
      i++
    }
  }
  return i
}

console.log(largestPrimeFactor(600851475143))







// function largestPrimeFactor(number) {
//   let primeArr = primeUpTo(number)
//   let primeFactorArr = []
//   for (let i = primeArr.length; i >=0; i--) {
//     switch(true) {
//       case number % primeArr[i] === 0:
//         primeFactorArr.push(primeArr[i])
//         break
//       default: 
//         break
//     }
//   }
//   return primeFactorArr[0]
// }


// function primeUpTo(number) {
//   let primeArr = []
//   for (let i = 2; i <= number; i++) {
//     const numsUpToI = [...Array(i).keys()].slice(2, i)
//     switch(true) {
//       case numsUpToI.some(num => i % num === 0): 
//         break
//       default: 
//         primeArr.push(i)
//     }
//   }
//   return primeArr
// }












//* TEST
// largestPrimeFactor(2) should return 2.
// largestPrimeFactor(3) should return 3.
// largestPrimeFactor(5) should return 5.
// largestPrimeFactor(7) should return 7.
// largestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857. 
//! test time outshould figure out a better 