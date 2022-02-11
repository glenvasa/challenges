// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  let result;
  if (str === " ") {
    return false;
  }

  let arr = str.trim().split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
      i--;
    }
  }

  let capArray = arr.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );

  result = capArray.join("");

  if (result.length > 139 || result === "") {
    return false;
  }

  return `#${result}`;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")); // =>  "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   ")); // =>  "#HelloWorld"
console.log(generateHashtag("")); // =>  false
