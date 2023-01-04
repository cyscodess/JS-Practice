// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    if (a1.length < 1 || a2.length < 1) return -1
    let b1 = a1.sort((a, b) => a.length - b.length)
    let b2 = a2.sort((a, b) => a.length - b.length)
    let diff1 = b2[b2.length-1].length - b1[0].length
    let diff2 = b1[b1.length-1].length - b2[0].length
    return (diff1 > diff2) ? diff1 : diff2
}