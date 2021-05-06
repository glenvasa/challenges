// JS Cardio

// Reverse an integer with no strings

const reverse = (int) => {
    let numarray = []
    while(int){
      numarray.push(int % 10)
      int = Math.floor(int / 10)
    }
    let reverseInt = parseInt(numarray.join('')) 
    return console.log(reverseInt);
}

//reverse(521)
//reverse(88997766)

// Return string with first letter of each word capitilized

// const capitalizeLetters = (str) =>{
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(capitalizeLetters("i love javascript"))

// const capitalizeLetters = (str) =>{
//   let arr = str.split(' ')
//   let newArray = []
//   for(let word of arr){
//    newArray.push(word.substring(0,1).toUpperCase() + word.substring(1));

//   }
//   return newArray.join(" ")
// }
// console.log(capitalizeLetters("i love javascript"))

const capitalizeLetters = (str) =>{
  
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase())
}
//console.log(capitalizeLetters("i love javascript"))

// Max Character
// return the character that is the most common in a string (javascript == 'a')

const maxCharacter = (str) => {
  let obj = {}
  let valArray = []
  let mostArray = []
  for(let char of str){
    if(obj[char]){
      obj[char] += 1
    } else {
      obj[char] = 1
    }
  }
  for(const [key, value] of Object.entries(obj)){
    //console.log(value);
    valArray.push(value)
  }
   let num = valArray.sort()[valArray.length- 1]
   console.log(obj);
   console.log(num);

  for(const [k] of Object.entries(obj)){
    
    if(obj[k] === num){
      mostArray.push(k)
    
    }

  }
  console.log(mostArray);
}

//console.log(maxCharacter('javascript'))
//console.log(maxCharacter('superdupernerd'));

const maximumCharacter = (str) => {
  const charMap = {}
  let maxNum = 0
  let maxChar = ''
  
  str.split('').forEach((char) => {
    if(charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  console.log(charMap);
  //use for in loop to iterate over object
  for(let char in charMap){
    // debugger inspect index.js c for continue repl to check values
    if(charMap[char] > maxNum){
      maxNum = charMap[char]
      maxChar = char
    } 
  }

  console.log(maxChar, maxNum);
}

//maximumCharacter('javascripttttt')

// FizzBuz
//  Print all nums 1-100; if multiple of 3 print fizz, 5 print buzz, both 3 & 5 print fizzbuzz

const fizzbuzz = () => {
  for(let i = 1; i <= 100; i++){
    let result = ''
    if(i % 3 === 0){ result = 'fizz'}
    if(i % 5 === 0){ result += 'buzz'}
    if((i % 3 !== 0) && (i % 5 !== 0)){ result = i}
    console.log(result);
  }
}

//fizzbuzz() 

// Add all numbers entered as parameters regardless of amount (No Arrays as parameter)
// can't use arrow function to access arguments
function addAll(){
let sum = 0
 for(let val in arguments){
  sum += arguments[val]
 }
 return sum
}

//console.log(addAll(2,5,6,7,10));

function addAll2(){
  let array = [...arguments]
  let sum = array.reduce((acc, curr) =>{
   return acc + curr 
  })
  return sum
}

//console.log(addAll2(2,5,6,7,10));

function addAll3(...rest){
  return rest.reduce((acc, curr) => acc + curr)
}

//console.log(addAll3(2,5,6,7,10));

// Sum all Primes
//  Pass in a number to loop up to and add all of the prime numbers (only factors are 1 and itself)
// Prime is whole number greater than 1; sumAllPrimes(10) === 17

const sumAllPrimes = (num) => {
  let nonPrimeArray = []
  for(let i = 2; i <= num; i++){
    for(let j = 2; j < i; j++ ){
      if(i % j === 0 ){
        nonPrimeArray.push(i)
        break
    }
  }
}
let numArray = []
for(let i = 2; i <= num; i++ ){
  numArray.push(i)
}
  console.log(numArray, nonPrimeArray);
  
  return numArray.filter(num => !nonPrimeArray.includes(num)).reduce((a,b) => a + b)
  
}


//console.log(sumAllPrimes(10));

function sumAllPrimes2(num){
let total = 0

function checkForPrime(i){
 for(let j = 2; j < i; j++){
   if(i % j === 0){
     return false
   }
 }
 return true
}



for(let i = 2; i <= num; i++){
  if(checkForPrime(i)){
    total += i
  }
}
return total
}

//console.log(sumAllPrimes2(10));

function seekAndDestroy2(arr){
  const args = Array.from(arguments)

  function filterArr(arr){
    // return true if NOT in array
    return args.indexOf(arr) === -1
  }

  return arr.filter(filterArr)
}

//console.log(seekAndDestroy2([2,3,4,6,6,'hello'], 2, 6))

// Seek and Destroy
// seekAndDestroy([2,3,4,6,6,'hello'], 2, 6) => [3,4, 'hello']
function seekAndDestroy(arr, ...rest){
  return arr.filter(val => !rest.includes(val))  
}

console.log(seekAndDestroy([2,3,4,6,6,'hello'], 2, 6))