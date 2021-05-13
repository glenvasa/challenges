// Given the positions of a white bishop and a black pawn on the standard chess board, 
// determine whether the bishop can capture the pawn in one move.


function bishopAndPawn(bishop, pawn) {
    return console.log(Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) === Math.abs(bishop[1] - pawn[1]));
    
    
  }


//bishopAndPawn("a1","c3") //true)

//bishopAndPawn("h1","h3") //false)

//bishopAndPawn("a5","c3") //true)

//bishopAndPawn("g1","f3") //false)




//Complete the solution so that the function will break up camel casing, using a space between words.
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""



            

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return console.log(string.join(''))
  }





solution('camelCasing') //, 'camel Casing', 
solution('camelCasingTest') //, 'camel Casing Test'