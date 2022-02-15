// function findUniq(arr) {
//     let store = {}
//     store[arr[0]] = 1
//     for(let i=1; i<3; i++){
//        store[arr[i]] === undefined ? store[arr[i]] = 1 : store[arr[i]] += 1
//        } 

//     for(const key in store){
//       if(store[key] === 1){
//           return parseFloat(key)
//       } 
//     }

//     for(let i=3; i<arr.length; i++)
//     if(store[arr[i]] === undefined){
//         return arr[i]
//     }
// }


function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    console.log(arr);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // === 2
//console.log(findUniq([ 0,0,0.55, 0, 0 ]))// === 0.55
//console.log(findUniq([1,0,0]))// 1