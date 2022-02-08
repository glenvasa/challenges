const getMiddle = (str) => {
    let result = ''
    let even = false;
    if(str.length % 2 === 0){
        even = true
    }
    
    even ? result = `${str[str.length / 2 - 1]}${str[str.length / 2]}` : result = `${str[Math.floor(str.length / 2)]}`
   
    return result
}



//getMiddle("test")// should return "es"

getMiddle("testing")// should return "t"

getMiddle("middle")// should return "dd"

getMiddle("A") //should return "A"