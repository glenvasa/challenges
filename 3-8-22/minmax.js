function minMax(arr){
    if(arr.length === 1){
        return [arr[0], arr[0]]
    }
    let sorted = arr.sort((a,b) => a-b)
    return [sorted[0], sorted[sorted.length -1]]
  }


  console.log(minMax([4,2000, 5, 4444, 2, 1, 555555]));
  console.log(minMax([1]));