// Expect the above characters as input. There won't be invalid input.

// Rules:

// If there is no input return an empty string. 
// Do not change romaji. (a->a, A->A ... NOT A->a )
// Change Kana to lower case romaji. (あ->a ... NOT あ->A)
// Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
// Example 1:

// Input: "aeiou" 
// Output:"hiragana"

// Expected output: "あえいおう"
// Example 2:

// Input: "AえイOう"
// Output:"romaji"

// Expected output: "AeiOu"

const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
    if (output === "romaji") {
        return input.split("").map((l, i) => hiraDict.includes(l) ? romajiDictLow.charAt(hiraDict.indexOf(l)) : kataDict.includes(l) ? romajiDictLow.charAt(kataDict.indexOf(l)) : l).join("")
    } else if (output === "hiragana") {
        return input.toLowerCase().split("").map((l, i) => romajiDictLow.includes(l) ? hiraDict.charAt(romajiDictLow.indexOf(l)) : kataDict.includes(l) ? hiraDict.charAt(kataDict.indexOf(l)) : l).join("")
    } else if (output === "katakana") {
        return input.toLowerCase().split("").map((l, i) => romajiDictLow.includes(l) ? kataDict.charAt(romajiDictLow.indexOf(l)) : hiraDict.includes(l) ? kataDict.charAt(hiraDict.indexOf(l)) : l).join("")
    } else {
        return ""
    }
}