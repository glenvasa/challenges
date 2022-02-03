const add_suffix = (suffix) => {
    return (word) => word + suffix
}



add_ly = add_suffix("ly")

console.log(add_ly("hopeless"));   //➞ "hopelessly"
//add_ly("total") //➞ "totally"

//add_less = add_suffix("less")

//add_less("fear") //➞ "fearless"
//add_less("ruth") //➞ "ruthless"