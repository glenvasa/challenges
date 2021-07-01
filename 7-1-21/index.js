function highAndLow(numbers){
    let array = numbers.split(' ').map(num => Number(num)).sort((a,b) => a-b)
    return `${array[array.length-1]} ${array[0]}`
  }


  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))


//console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
//console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
//console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"