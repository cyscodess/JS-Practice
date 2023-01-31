// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
    const values = x.split(" ").map(word => word.split("").map(letter => alphabets.indexOf(letter) + 1))
    const sums = values.map(word => word.reduce((acc, curr) => acc + +curr, 0))
    const indexOfHighest = sums.indexOf(Math.max(...sums))
    return x.split(" ")[indexOfHighest]
}