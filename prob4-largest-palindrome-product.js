// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function isPalindrome(number) {
  const numStr = number.toString()
  if (numStr.length < 2) return false
  else {
    if (numStr.slice(0, numStr.length / 2) === (numStr.slice(numStr.length / -2)).split('').reverse().join('')) return true 
    return false
  }
}

function largestPalindromeProduct(nd) {
  let largestPalin = 0 
  let max = parseInt('9'.repeat(nd))
  let min = parseInt('1'.concat('0'.repeat(nd - 1)))
  for (let i = max; i > min; i--) {
    for (let j = max; j > min; j--) {
      let product = i * j
      if (isPalindrome(product) && product > largestPalin) {
        largestPalin = product
      }
    }
  }
  return largestPalin
  
}

console.log(largestPalindromeProduct(4))






//* TEST

// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.