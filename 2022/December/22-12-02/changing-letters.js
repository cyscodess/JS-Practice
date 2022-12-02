// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap (string) {
    let arr = string.split("")
    let vowels = 'aeiou'
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = arr[i].toUpperCase()
        }
    }
    return arr.join("")
}