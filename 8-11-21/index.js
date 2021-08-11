function removeDuplicateWords (s) {
    let stringArray = s.split(' ')
    let filteredString = ''
    
    for (let i=0; i < stringArray.length; i++){
        filteredString.includes(stringArray[i]) ? null : filteredString += ` ${stringArray[i]}` 
    }

    return filteredString.trim()
  }



  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
  // 'alpha beta gamma delta');
  