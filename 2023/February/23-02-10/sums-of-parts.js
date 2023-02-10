// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls) {
    const sums = []
    while (ls.length > 0) {
        sums.push(ls.reduce((acc, curr) => acc + curr, 0))
        ls.splice(0, 1)
    }
    sums.push(0)
    return (ls) ? sums : [0]
}

function partsSums(ls) {
    const sums = new Array(ls.length+1).fill(0)
    for (let i = 0; i < sums.length - 1; i++) {
        sums[i] = ls.reduce((acc, curr) => acc + curr)
        ls.splice(0, 1)
    }
    return sums
}