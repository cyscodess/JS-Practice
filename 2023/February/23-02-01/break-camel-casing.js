// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const arr = string.split("")
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr.splice(i, 0, " ")
            i++
        }
    }
    return arr.join("")
}