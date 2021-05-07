// Longest Word

// longestWord('Hello there, my name is Brad) => ['hello', 'there']

const longestWord = (sen) => {
  let longestArr = [""];
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  for (let word of wordArr) {
    word.length > longestArr[0].length
      ? (longestArr = [word])
      : word.length === longestArr[0].length
      ? longestArr.push(word)
      : null;
  }
  return longestArr;
};

//console.log(longestWord('Hello there, my name is Brad'))
//console.log(longestWord('What can you possibly be thinking? Are you really that stupid?'))

// Array Chunking

// chunkArray([1,2,3,4,5,6,7], 3) ===== [[1,2,3], [4,5,6], [7]]
//  chunkArray([1,2,3,4,5,6,7], 2) ===== [[1,2], [3,4], [5,6], [7]]

const chunkArray = (arr, len) => {
  let newArr = [];
  let group = [];
  while (arr.length > 0) {
    if (arr.length >= len) {
      group = arr.slice(0, len);
      newArr.push(group);
      arr.splice(0, len);
    } else {
      newArr.push(arr);
      arr = [];
    }
  }
  return console.log(newArr);
};

//chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
//([1,2,3,4,5,6,7], 2)

// Flatten Array
// [[1,2], [3,4], [5, 6], [7]] = [1,2,3,4,5,6,7]

// const flattenArray = (arrays) => {
//     let flatArr = []
//   arrays.forEach(x => flatArr.push(...x));
//   return flatArr
// };

// const flattenArray = (arrays) => {
//   return [].concat.apply([], arrays)
// };

const flattenArray = (arrays) => {
  return [].concat(...arrays);
};

//console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// Anagram

// 'elbow' === 'below'
// 'Dormitory' === 'dirty room##'

// const isAnagram = (str1, str2) => {
//    return str1.toLowerCase().match(/[a-z0-9]/g).sort().join('') === (str2.toLowerCase().match(/[a-z0-9]/g).sort().join(''))

// }

const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

const formatStr = (str) => {
  return (
    str
      //replace everything that is not a word character with an ''
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};

//console.log(isAnagram('elbow', 'below'))
//console.log(isAnagram('Do!!rmitory', 'dirty room##'))

// Letter Changes

// change every letter of the string to the one that follows it and Capitalize the vowels

// 'hello there' === 'Ifmmp UIfsf'
// z should turn to A

const letterChanges = (str) => {
  const wordchar = /[a-z]/gi;
  let arr = [];
  let newWord = "";
  const vowels = ["a", "e", "i", "o", "u"];
  

  for (let char in str) {
    let code = str.charCodeAt(char);
    if (str.match(wordchar).includes(str[char])) {
      code === 122 ? arr.push(97) : arr.push(code + 1);
    } else {
      arr.push(code);
    }
  }

  newWord = String.fromCharCode(...arr);

  return newWord
    .split("")
    .map((x) => (vowels.includes(x) ? x.toUpperCase() : x))
    .join("");
};

const output = letterChanges("hello there");
console.log(output);
