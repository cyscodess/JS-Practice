// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    let convert = a.map( (el, index) => {
        if (el === 97) {
            el = "a"
        } else if (el === 101) {
            el = "e"
        } else if (el === 105) {
            el = "i"
        } else if (el === 111) {
            el = "o"
        } else if (el === 117) {
            el = "u"
        } else {
            return el
        }
            return el
    })
    return convert
}