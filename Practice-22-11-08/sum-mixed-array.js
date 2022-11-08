// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let initial = 0
    return sum = x.reduce((acc, c) => acc + Number(c), initial)
    return sum
}