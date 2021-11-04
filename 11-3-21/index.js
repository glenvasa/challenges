function getCount(str) {
    var vowelsCount = 0;
    
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
            vowelsCount += 1
        }
    }
    
    return vowelsCount;
  }



console.log(getCount('acceiggrtaiuo')); // 7 vowels