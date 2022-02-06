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
  let soundsArray = sounds.split("-");
  let tiebreakArray = sounds.split("-")
  let rallyArray = [];
  let score = { ping: 0, pong: 0 };
  let tiebreak;
  let winner;

  while (soundsArray.length > 0) {
    if (soundsArray[0] === "ping" || soundsArray[0] === "pong") {
      for (const shot of soundsArray) {
        if (shot !== "ping" && shot !== "pong") {
          const mistakeIndex = soundsArray.indexOf(shot);
          const rally = soundsArray.slice(0, mistakeIndex);
          rallyArray.push(rally);
          soundsArray.splice(0, mistakeIndex);
          break;
        }
      }
    } else {
      const nextPing = soundsArray.indexOf("ping");
      const nextPong = soundsArray.indexOf("pong");
      if (nextPing === -1 && nextPong === -1) {
        soundsArray.splice(0, soundsArray.length);
      } else if (nextPing < nextPong) {
        soundsArray.splice(0, nextPing);
      } else {
        soundsArray.splice(0, nextPong);
      }
    }
  }


  for (const point of rallyArray) {
    if(point[0] !== point[rallyArray.length - 1]){
      let player = point[0]
      score[player] += 1
    }
  }

  for (let i=tiebreakArray.length-1; i>0; i--){
    if(tiebreakArray[i] === 'ping' || tiebreakArray[i] === 'pong'){
      const loser = tiebreakArray[i]
      loser === 'ping' ? tiebreak = 'pong' : tiebreak = 'ping'
      break
    }
  }

  score.ping > score.pong
    ? (winner = "ping")
    : score.ping < score.pong
    ? (winner = "pong")
    : (winner = tiebreak);

  return winner;
}

console.log(pingPong("ping-pong-ping-pong-bonk-bing-doof")); // "ping"
console.log(pingPong("pong-ping-dong-ping-pong-tink-bonk-pong-ping-doof")); // "pong"
console.log(pingPong("pong-ping-bink-ping-pong-donk")); // draw but return "ping" b/c "pong" hit last bad shot
console.log(pingPong("ping-pong-bink-pong-ping-donk")); // draw but return "pong" b/c "ping" hit last bad shot
