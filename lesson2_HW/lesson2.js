// Task 1
function numberOfBits(integer) {
   if (integer > 0) {
     return integer.toString(2)
                   .split('')
                   .map(item => +item)
                   .reduce((sum, current) => sum + current, 0);
   } else {alert('Please, enter positive integer!');}
}

console.log(numberOfBits(1234));


// Task 2
function sort (str) {
   return str=''? '': str.split(' ')
                         .sort(function( a, b ) {
                             let aNumber = a.match(/\d+/g)[0];
                             let bNumber = b.match(/\d+/g)[0];
                             return aNumber - bNumber;})
                         .join(' ');
}

console.log(sort("is2 Thi1s T4est 3a"));
console.log(sort("4of Fo1r pe6ople g3ood th5e the2"));
console.log(sort(""));


// Task 3
function result (arr) {
    let players = [11, 11];

    let teamA = arr.filter(item => item.includes("A"));
    let teamARed = teamA.filter(item => item.includes("R"));
    let teamARedUnique = Array.from(new Set (teamARed));
    let teamAYellow = teamA.filter(item => item.includes("Y"));
    let countTeamAYellow = 0;
    for (let i=0; i<teamAYellow.length; i++) {
        for (let j=i+1; j<teamAYellow.length; j++) {
              (teamAYellow[i] = teamAYellow[j])? countTeamAYellow+=1: 0;
        }
    }
    let playersSentOffTeamA = teamARedUnique.length + countTeamAYellow;

    let teamB = arr.filter(item => item.includes("B"));
    let teamBRed = teamB.filter(item => item.includes("R"));
    let teamBRedUnique = Array.from(new Set (teamBRed));
    let teamBYellow = teamB.filter(item => item.includes("Y"));
    let countTeamBYellow = 0;
    for (let i=0; i<teamBYellow.length; i++) {
        for (let j=i+1; j<teamBYellow.length; j++) {
              (teamBYellow[i] = teamBYellow[j])? countTeamBYellow+=1: 0;
        }
    }
    let playersSentOffTeamB = teamBRedUnique.length + countTeamBYellow;

    players[0] = players[0] - playersSentOffTeamA;
    players[1] = players[1] - playersSentOffTeamB;

    
    return players;
}

console.log(result([]));
console.log(result(["A4Y", "A4Y"]));
console.log(result(["A4Y", "A4R"]));
console.log(result(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]));
console.log(result(["A4R", "A4R", "A4R"]));
console.log(result(["A4R", "A6R", "A8R", "A10R", "A11R"]));
