function removeDuplicateWords (s) {
    let stringArray = s.split(' ')
    let filteredString = ''
    
    for (let i=0; i < stringArray.length; i++){
        filteredString.includes(stringArray[i]) ? null : filteredString += ` ${stringArray[i]}` 
    }

    return filteredString.trim()
  }



  //console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
  // 'alpha beta gamma delta');


  
//   Let us begin with an example:

//   A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
//   He wants to keep his old car until he can buy the secondhand one.
  
//   He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
//  Furthermore this percent of loss increases of 0.5 percent at the end of every two months. 

// Our man finds it difficult to make all these calculations.
  
//   Can you help him?
  
//   How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?



  function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let numMonths = 0
    let excess = startPriceOld - startPriceNew
    let savings = 0

    while(excess < 0) {
        if(numMonths % 2 !== 0){
            percentLossByMonth += .5
        }

        startPriceOld *= .01 * (100 - percentLossByMonth) 
        startPriceNew *= .01 * (100 - percentLossByMonth)
        savings += savingperMonth

        excess = (startPriceOld + savings) - startPriceNew
        
        numMonths++
        console.log(numMonths, percentLossByMonth, excess);
    }

    return [numMonths, Math.round(excess)]
  }


  console.log(nbMonths(3000 ,3000 ,1000 ,1.2)) //  [0, 0]

  //console.log(nbMonths(2000, 8000, 1000, 1.5)) //, [6, 766])

//   end month 1: percentLoss 1.5 available -4910.0
//   end month 2: percentLoss 2.0 available -3791.7999...
//   end month 3: percentLoss 2.0 available -2675.964
//   end month 4: percentLoss 2.5 available -1534.06489...
//   end month 5: percentLoss 2.5 available -395.71327...
//   end month 6: percentLoss 3.0 available 766.158120825...
//   return [6, 766] or (6, 766)



//console.log(nbMonths(12000, 8000, 1000, 1.5) )// ,[0, 4000])