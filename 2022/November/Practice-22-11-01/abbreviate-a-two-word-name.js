// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){ 
    let parts = name.split(" ")
    let initials = ""
    const lastIndex = parts.length - 1
    for (let i = 0; i < parts.length; i++) {
        if (i === lastIndex) {
        initials += parts[i].charAt(0)
        } else {
        initials += parts[i].charAt(0) + "."
        }
    }
    return initials.toUpperCase()
}