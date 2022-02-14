//Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

//"aa" => "b", "bb" => "c", .. "zz" => "a".
//The equal letters do not have to be adjacent.
//Repeat this operation until there are no possible substitutions left.
//Return a string.

//Example:

//let str = "zzzab"
 //   str = "azab"
 //   str = "bzb"
 //   str = "cz"
//return "cz"
//Notes
//The order of letters in the result is not important.
//The letters "zz" transform into "a".
//There will only be lowercase letters.

//lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'));
      // =====>  ('acdeghlmnqrvyz')



      const lastSurvivors = (str) => {
            const chars = [...str];
           
            function getNextChar(char) {
              if (char === 'z') return 'a';
              const charCode = char.charCodeAt(0);
             
              return String.fromCharCode(charCode + 1);
            }
            for (let i = 0; i < chars.length; i++) {
              for (let j = i + 1; j < chars.length; j++) {
                if (chars[i] === chars[j]) {
                  chars[i] = getNextChar(chars[i]);
                  chars.splice(j, 1);
                  i = -1;
                  break;
                }
              }
            }
            return chars.join('');
          }
     
      
      
      
      console.log(lastSurvivors('zzzab')) // cz
      //console.log(lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'));
      // =====>  ('acdeghlmnqrvyz')