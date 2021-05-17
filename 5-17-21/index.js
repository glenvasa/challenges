//Given a sequence of numbers, find the largest pair sum in the sequence.

//For example

//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)


function largestPairSum(numbers)
{
  let sum;  
  const arr = numbers.sort((a,b) => {
      return b-a
  })
  sum = arr[0] + arr[1]
  return sum;
}


//console.log(largestPairSum([10, 14, 2, 23, 19])) //-->  42 (= 23 + 19)
//console.log(largestPairSum([99, 2, 2, 23, 19])) 
console.log(largestPairSum([-100,-29,-24,-19,19])) //), 0 , "Sum should be 0");
    console.log(largestPairSum([1,2,3,4,6,-1,2])) //, 10 , "Sum should be 10");
    console.log(largestPairSum([-10, -8, -16, -18, -19])) //, -18 , "Sum should be -18");