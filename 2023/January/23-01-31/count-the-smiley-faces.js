// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
    if (arr.length < 1) return 0
    const eyes = [":", ";"]
    const nose = ["-", "~"]
    const mouth = [")", "D"]
    let count = 0
    let smiley = arr.map(face => face.split(""))
    for (let i = 0; i < smiley.length; i++) {
        if (smiley[i].length === 2) {
            if (eyes.includes(smiley[i][0]) && mouth.includes(smiley[i][1])) count+=1
        } else if (smiley[i].length === 3) {
            if (eyes.includes(smiley[i][0]) && nose.includes(smiley[i][1]) && mouth.includes(smiley[i][2])) count+=1
        }
    }
    return count
}