// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let vowels = 'aeiouAEIOU'
    let arr = s.split("").map( letter => vowels.includes(letter) ? letter = "!" : letter).join("")
    return arr
}