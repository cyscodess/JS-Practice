// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let newArr = []
    a.forEach( e => {
        if (!newArr.includes(e)) {
        newArr.push(e)
        }
    })
    return newArr
}