// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {


    
    
    if(result.length > 140 || str === '' || result === ''){
        return false
    }
    return result
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));// =>  "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   "));// =>  "#HelloWorld"
console.log(generateHashtag(""));// =>  false

 
                 
                                       