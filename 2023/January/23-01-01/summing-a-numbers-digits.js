// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
    let n = Math.abs(number)
    return n.toString().split("").reduce((sum, num) => sum + +num, 0)
}
