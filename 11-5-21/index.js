function isPrime(num) {
    if(num <= 1){
      return false
    }

    console.log(Math.sqrt(num));
  // don't have to iterate up to num b/c if number is not prime
  // sqrt of num or less will be divisible
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }  
    }
   return true
  }
  
//   console.log(isPrime(1)); // false
//   console.log(isPrime(-1)); // false 
  console.log(isPrime(73)); // true
//   console.log(isPrime(75)); // false
  
  // Test.assertEquals(isPrime(0),  false, "0 is not prime");
  // 		Test.assertEquals(isPrime(1),  false, "1 is not prime");
  // 		Test.assertEquals(isPrime(2),  true, "2 is prime");
  // 		Test.assertEquals(isPrime(73), true, "73 is prime");
  // 		Test.assertEquals(isPrime(75), false, "75 is not prime");
  // 		Test.assertEquals(isPrime(-1), false, "-1 is not prime");