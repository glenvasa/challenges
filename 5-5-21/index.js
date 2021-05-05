//The main idea is to count all the occurring characters in a string.
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.

const count = (string) => {
  let obj = {};
  if (string === "") {
    return {};
  }

  for (let i = 0; i < string.length; i++) {
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] += 1;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
};

//console.log(count("aba"));
//console.log(count(""));
//console.log(count("abccccbbbaabb"));

var nbrOfLaps = function (x, y) {
  let laps = [];
  let common = false;
  let i = 0;

  if (x === y) {
    return [1, 1];
  }

  while (!common) {
    i++;
    if (i % x === 0 && i % y === 0) {
      common = true;
    }
  }
  laps[0] = i / x;
  laps[1] = i / y;

  return laps;
};

// console.log(nbrOfLaps(5,3))
//console.log(nbrOfLaps(4, 6));
// console.log(nbrOfLaps(5,5))

//  Test.assertDeepEquals(nbrOfLaps(5, 3), [3,5])
//Test.assertDeepEquals(nbrOfLaps(4, 6), [3,2])
//Test.assertDeepEquals(nbrOfLaps(5, 5), [1,1])

//You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

//Don't presume the separators too much or you could be surprised.

//For example: (Input --> Output)

//"example name" --> "ExampleName"
//"your-NaMe-here" --> "YourNameHere"
//"testing ABC" --> "TestingAbc"

// const camelize = (str) => {
//   let arr = str.split("");
//   let letters = str.match(/[a-z]|[0-9]/gi);

//   for (let i = 0; i < arr.length; i++) {
//     if (!letters.includes(arr[i])) {
//       arr[i] = " ";
//     }
//   }

//   let newString = arr.join("");
//   let newArray = newString.split(" ");
//   console.log(newArray);

//    newArray.forEach(element => {
//        console.log(element);
//     typeof element === 'number'
//     ? element = element[0] + element.slice(1).toLowerCase() 
//     : element = element[0].toUpperCase() + element.slice(1).toLowerCase()
//     }
    
//    )
// console.log(newArray)
//   let answer = newArray.join("");
//   return answer;
// };

function camelize(str) {
    console.log(str.match(/[a-z0-9]+/gi));
    return str.match(/[a-z0-9]+/gi).map(function(s) {
      return s[0].toUpperCase() + s.substr(1).toLowerCase()
    }).join('')
  }

//console.log(camelize("example name"));
//console.log(camelize("your-NaMe-here"));
//console.log(camelize("testing ABC"));
console.log(camelize("7dGDOg296u1 HC?;TwhbE? z; vQME,!4u")) //should equal "7dgdog296u1HcTwhbeZVqme4u"