// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

function none(arr, fun){
    arr = arr.map(e => (!fun(e)) ? true : false)
    return (arr.includes(false)) ? false : true
}