function longestConsec(strarr, k) {
    if(strarr.length === 0 || k<=0 || k > strarr.length){
        return ""
    }
    let resultsArr = []
    for(let i=0; i<strarr.length; i++){
        let conStr = strarr[i]
        for(let j=i+1; j<=i+(k-1); j++){
            if(strarr[j] !== undefined){
                conStr += strarr[j]
            }
        }
        resultsArr[i] = {length: conStr.length, string: conStr}
        
    }
    
    let solutionObj = {length: 0, string: ''}
    for(const obj of resultsArr){
        if(obj.length > solutionObj.length){
            solutionObj = obj
        }
    }
  return solutionObj.string
}




console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)) //--> "abigailtheta"
//console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))// "oocccffuucccjjjkkkjyyyeehh")
//console.log(longestConsec([], 3)) //, "")
//console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) //, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))//, "wlwsasphmxxowiaxujylentrklctozmymu")
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))//, "ixoyx3452zzzzzzzzzzzz")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))//, "")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))//, "")

