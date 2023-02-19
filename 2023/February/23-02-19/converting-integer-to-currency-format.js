// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// For example:

// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.

function toCurrency(price){
    let p = price.toString().split("")
    if (p.length < 3) return price
    for (let i = p.length-3; i > 0; i-=3) {
        p.splice(i, 0, ",")
    }
    return p.join("")
}