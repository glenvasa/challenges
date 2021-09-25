let arr = [10,20,30,40,50]

const revArray = (array) => {
    let len = array.length
    for (let i=0; i< len; i++){
        array[i+1] = array[i]
    
        
      
    }
    


   console.log(array)
}


revArray(arr)