const howSum = (targetSum, numArray) => {
    // base cases
    if (targetSum === 0) return []
    if (targetSum < 0) return  null

    // for each number in the array check to see if there is a path/branch that reduces targetSum to 0
    // if there is, then it means we have found a combination that adds up to original target and we return that array
    for (let num of numArray){
        let remainderTarget= targetSum - num
        let remainderCall = howSum(remainderTarget, numArray)
       // if we run the recursive fn and it returns null, it is a dead end
       // but if it returns something other than null, it leads to a successful combination and we return
       // the array plus add the current num to the array
        if(remainderCall !== null){
            return [...remainderCall, num]
        }
    }
    // if we don't find any combinations that meet the condition in the above loop, we return null
    // because that means there are no combinations that exist that can add up to original target
    return null
}

console.log(howSum(7, [5,3,4,7]));
console.log(howSum(7, [5,3,3,1]));
console.log(howSum(7, [1, 2]));