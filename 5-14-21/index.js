//Example:
//str1 = "what a beautiful day today"
//str2 = "it's okay, but very breezy"
//When the strings are sorted, str1 will be first as its longest sub-string of contiguous 
//vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", 
//which is of length 2.





// function sortStringsByVowels(strings){
//     var results = [];
//     let str1 = strings[0];
//     let str2 = strings[1]
//     let vowels = /[aeiou]/g

//     let str1num = 0
//     let str2num = 0
    
//     console.log(str1.match(vowels));

    // for(let char of str1){
    //     if(char === str1.match(vowels)){
    //         console.log('yes');
    //     } else {
    //         console.log('no');
    //     }
    // }
    



    // return results;
    // }


//  sortStringsByVowels(["what a beautiful day today","it's okay, but very breezy"])

const substr = (str) => {
    let count = 0;
    let tempCount = 0;
    for (char of str) {
      if ("aeiouAEIOU".includes(char)) {
        tempCount++;
      } else {
        count < tempCount ? count = tempCount : count;
        tempCount = 0;
      }
    }
    count < tempCount ? count = tempCount : count;
    return count;
  }
  
  function sortStringsByVowels(strings){
  return strings.sort((a,b) => substr(b) - substr(a));
  
  }