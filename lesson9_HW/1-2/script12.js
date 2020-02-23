// --------------------- Task1 ---------------------
function checker (arr) {
    
    let result = 0;
    let arrNew = arr.reduce((a,b) => a.concat(b));

    for (let i = 0; i < arrNew.length; i++) {
        if (arrNew[i] === 0) {
            return -1;
        }
    }
 
    // проверка по горизонтали
    
    if (arr[0].every(item => item == 1 ) || arr[1].every(item => item == 1) || arr[2].every(item => item == 1)) {
       result = 1;
    }

    if (arr[0].every(item => item == 2) || arr[1].every(item => item == 2) || arr[2].every(item => item == 2)) {
        result = 2;
    }

    // проверка по вертикали

    if (arr.map(item => item[0]).every(item => item == 1) || arr.map(item => item[1]).every(item => item == 1) || arr.map(item => item[2]).every(item => item == 1)) {
        result = 1;
    }

    if (arr.map(item => item[0]).every(item => item == 2) || arr.map(item => item[1]).every(item => item == 2) || arr.map(item => item[2]).every(item => item == 2)) {
        result = 2;
    }

    // проверка по диагоналям

    let arrD1 = [];
    arrD1.push(arr[0][0],arr[1][1], arr[2][2]);

    if (arrD1.every(item => item == 1)) {
        result = 1;
    }

    if (arrD1.every(item => item == 2)) {
        result = 2;
    }

    let arrD2 =[];
    arrD2.push(arr[0][2],arr[1][1], arr[2][0]);

    if (arrD2.every(item => item == 1)) {
        result = 1;
    }

    if (arrD2.every(item => item == 2)) {
        result = 2;
    }

    return result;
   
}

// console.log(checker([[0, 0, 1], [0, 1, 2], [2, 1, 0]]));//-1

// console.log(checker([[1, 1, 1], [1, 2, 2], [1, 2, 2]]));//1
// console.log(checker([[2, 1, 1], [2, 1, 1], [2, 2, 2]]));//2
// console.log(checker([[2, 1, 1], [1, 1, 1], [1, 2, 2]]));//1
// console.log(checker([[2, 2, 2], [1, 2, 1], [1, 2, 2]]));//2

// console.log(checker([[1, 1, 2], [1, 2, 1], [1, 2, 2]]));//1
// console.log(checker([[1, 1, 2], [2, 1, 1], [1, 1, 2]]));//1
// console.log(checker([[2, 1, 1], [1, 2, 1], [2, 1, 1]]));//1
// console.log(checker([[2, 1, 2], [2, 1, 2], [2, 2, 1]]));//2
// console.log(checker([[1, 2, 2], [2, 2, 1], [2, 2, 1]]));//2
// console.log(checker([[1, 2, 2], [2, 1, 2], [1, 2, 2]]));//2

// console.log(checker([[1, 1, 2], [2, 1, 1], [2, 2, 1]]));//1
// console.log(checker([[2, 1, 2], [1, 2, 1], [1, 2, 2]]));//2
// console.log(checker([[1, 2, 1], [2, 1, 2], [1, 1, 2]]));//1
// console.log(checker([[1, 2, 2], [1, 2, 2], [2, 1, 2]]));//2

// console.log(checker([[2, 1, 2], [1, 2, 2], [1, 2, 1]]));//0
// console.log(checker([[1, 1, 2], [2, 2, 1], [1, 1, 2]]));//0


// --------------------- Task2 ---------------------

function damagedOrSunk(board, attacks) {

    let arrAttacks = attacks.map(item => { 
        let temp = item[0];
        item[0] = item[1];
        item[1] = temp;
        return item;
    })

    let arrBoard = board.reverse();

    let arrPoints = arrAttacks.map(item => arrBoard[item[0]-1][item[1]-1]);
    
    let arrBoardOneDimensional = arrBoard.reduce((a,b) => a.concat(b));

    let boat1 = arrBoardOneDimensional.filter(item => item == 1).length;
    let boat2 = arrBoardOneDimensional.filter(item => item == 2).length;
    let boat3 = arrBoardOneDimensional.filter(item => item == 3).length;

    let boat1Demaged = arrPoints.filter(item => item == 1).length;
    let boat2Demaged = arrPoints.filter(item => item == 2).length;
    let boat3Demaged = arrPoints.filter(item => item == 3).length;

    let result = {};
    result.sunk = 0;
    result.demaged = 0;
    result.notTouched = 0;
    result.points = 0;

    if (boat1 == boat1Demaged) {
        result.sunk++;
        result.points++;
    }

    if (boat2 == boat2Demaged) {
        result.sunk++;
        result.points++;
    }
    
    if (boat3 == boat3Demaged) {
        result.sunk++;
        result.points++;
    }

    if (boat1 > boat1Demaged && boat1Demaged > 0) {
        result.demaged++;
        result.points+= 0.5;
    }

    if (boat2 > boat2Demaged && boat2Demaged > 0) {
        result.demaged++;
        result.points+= 0.5;
    }  
    
    if (boat3 > boat3Demaged && boat3Demaged > 0) {
        result.demaged++;
        result.points+= 0.5;
    }

    if (boat1Demaged == 0) {
        result.notTouched++;
        result.points--;
    }

    if (boat2Demaged == 0) {
        result.notTouched++;
        result.points--;
    }

    if (boat3Demaged == 0) {
        result.notTouched++;
        result.points--;
    }

    return result;

}

//console.log(damagedOrSunk([[0,0,0,2,2,0], [0,3,0,0,0,0], [0,3,0,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]])); 
//{suck: 0, demaged: 2, notTouched: 1, points: 0}
//console.log(damagedOrSunk([[0,0,0,2,2,0], [0,3,0,0,0,0], [0,3,0,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2], [4, 1], [2, 2], [2, 3]]));
//{suck: 2, demaged: 0, notTouched: 1, points: 1}
//console.log(damagedOrSunk([[0,0,0,2,2,0], [0,3,0,0,0,0], [0,3,0,1,0,0], [0,3,0,1,0,0]], [[1, 1], [3, 3], [6, 2]]));
//{suck: 0, demaged: 0, notTouched: 3, points: -3}
//console.log(damagedOrSunk([[0,0,0,2,2,0], [0,3,0,0,0,0], [0,3,0,1,0,0], [0,3,0,1,0,0]], [[4, 4], [2, 2], [4, 2]]));
//{suck: 0, demaged: 3, notTouched: 0, points: 1.5}



