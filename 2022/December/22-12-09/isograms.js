// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let word = str.toLowerCase()
    console.log(word)
    const count = new Map()
    if (word) {
        for (let i = 0; i < word.length; i++) {
        if (count.has(word[i])) {
            return false
            break
        } else {
            count.set(word[i], i)
            if (count.size === word.length) {
            return true
            }
        }
        }
    }
    else if (word === "") {
        return true
    }
}