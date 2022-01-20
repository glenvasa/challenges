function FirstFactorial(num, result = 1) { 
    if(num === 1){
        return result
    }
    result *= num
    return FirstFactorial(num - 1, result) 
  
  }

  //console.log(FirstFactorial(4)) // 24
  //console.log(FirstFactorial(8)) // 40320



  //strArr is ["aabdccdbcacd", "aad"] => "aabd" is smallest substring of str1 
  // that contains all characters in str2

  function minSub(strArr) { 
    const str1 = strArr[0]
    const str2 = strArr[1]
    console.log(str1, str2);
    return str2.includes(str1)
  }

console.log(minSub(["aabdccdbcacd", "aad"])); // "aabd"
// console.log(minSub(["ahffaksfajeeubsne", "jefaa"])) // aksfaje