function getCount(str) {
    var vowelsCount = 0;
    
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
            vowelsCount += 1
        }
    }
    
    return vowelsCount;
  }



//console.log(getCount('acceiggrtaiuo')); // 7 vowels

// Have a look at the following numbers.

//  n | score
// ---+-------
//  1 |  50
//  2 |  150
//  3 |  300
//  4 |  500
//  5 |  750
//  6 | 1050
// Can you find a pattern in it? If so, then write a 
// function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n:

function getScore(n) {
    let adder = 50
    let score = 0;
    for(let i=1; i <= n; i++){    
        score += adder
        adder += 50
    }
    return score
  }


  console.log(getScore(6));