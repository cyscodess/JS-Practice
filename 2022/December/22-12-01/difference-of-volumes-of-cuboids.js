// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
    let volumeOfA = a.reduce( (a, b) => a * b)
    let volumeOfB = b.reduce ( (a, b) => a * b)
    let cuboids = [volumeOfA, volumeOfB].sort( (a, b) => b - a)
    return cuboids[0] - cuboids[1]
}

// If you can, try writing it in one line of code.

function findDifferenceOneLine(a, b) {
    return Math.abs(a.reduce( (a, b) => a * b) - b.reduce( (a, b) => a * b))
}