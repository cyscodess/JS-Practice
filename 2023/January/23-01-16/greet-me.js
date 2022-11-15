// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let cap = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
    return `Hello ${cap}!`
};