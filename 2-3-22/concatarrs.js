


const concat = (...args) => {
    console.log([].concat(...args))
}








concat([1, 2, 3], [4, 5], [6, 7]) //➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) //➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) //➞ [1, 2, 3, 4]

//concat([4, 4, 4, 4, 4]) //➞ [4, 4, 4, 4, 4]