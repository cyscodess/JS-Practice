// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let newArr = numbers.map(num => Math.pow(num, 2))
    let sum = newArr.reduce((total, current) => total + current, 0)
    return sum
}