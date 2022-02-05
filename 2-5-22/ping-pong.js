// A typical rally may sound like this:

// ping-pong-ping-pong-ping-pong-ping-pong-dong-tang-bing-tink-donk-donk-donk

// Mr Ping served
// There were several good returns
// Mr Pong hits a bad shot which broke the handle off his wife's 2nd favourite teacup. Oops.
// Kata Task
// Who scored the most points?

// Input
// The sounds of one or more rallies.

// Output
// The name of the winning player: ping or pong

// Notes
// To score a point the same player must both serve and win the rally.
// Whoever picks the ball off the floor will serve next. It's random.
// A bad noise is anything other than ping or pong.
// A bad noise means whoever hit the ball last hit a bad shot.
// For some unknown reason all noises are 4 lowercase characters, and delimited by -
// If scores are even, then the winner is the player who did NOT hit the final bad shot.
// There are no double hits.
// The final rally always ends with the ball on the floor.
// All input is valid.


function pingPong(sounds) {
    
    //return "ping" or "pong"
  }
  

console.log(pingPong("ping-pong-ping-pong-bonk-bing-doof")); // "ping"
console.log(pingPong("pong-ping-dong-ping-pong-tink-bonk-pong-ping-doof")); // "pong"
console.log(pingPong("pong-ping-bink-ping-pong-donk")); // draw but return "ping" b/c "pong" hit last bad shot
        

   
        

   
    
         
    
