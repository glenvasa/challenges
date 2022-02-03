const num_of_digits = (n) => {
    if(n < 0) n = -n
    let digits = 1
    while(n >= 10){
       n /= 10
       digits += 1
    }
    console.log(digits);
}



num_of_digits(-1000) //➞ 4

//num_of_digits(12) //➞ 2

num_of_digits(-1305981031) //➞ 10

//num_of_digits(0) //➞ 1