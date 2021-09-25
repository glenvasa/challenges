let arr = [1,2,3,4,5]

arr = arr.reduce((a,c) => {
   a.unshift(c)
    return a
}, [])

console.log(arr);