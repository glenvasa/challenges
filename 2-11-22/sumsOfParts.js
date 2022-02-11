// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// This code works but more time efficient solutions available
//
// function partsSums(ls) {
//   let result = [];
//   for (let i = 0; i <= ls.length; i++) {
//     result.push(
//       ls.slice(i).reduce((acc, cur) => {
//         return acc + cur;
//       }, 0)
//     );
//   }
//   return result;
// }

// This code also works but more time efficient solutions available
// const partsSums = (ls) => {
//     let result = []
//     let sum = ls.reduce((acc, cur) => {
//         return acc + cur
//     }, 0)

//     while(ls.length > 0){
//         result.push(sum)
//         sum -= ls[0]
//         ls.shift(0)
//     }

//     result.push(0)
//     return result;
// }

// This solution passed the Kata as it did not time out after 12000ms like the other 2 solutions above.
// This solution doesn't manipulate the ls array during the loop, which accounts for the time difference

function partsSums(ls) {
  let sum = ls.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  
  let result = [sum]
  for(const num of ls){
    result.push(sum - num)
    sum -= num
  }
  return result
}

console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
console.log(partsSums([]));
