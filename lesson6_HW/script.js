// Task 1
const numberOfPoints = [[2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,8]];

function closestPoints (arr) {
    let x = 0;
    let y = 0;
    let distance = 0;
    let minDistance = Infinity;
    let point1;
    let point2;
    

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i + 1; j < arr.length; j++) {
            x = arr[i][0] - arr[j][0];
            y = arr[i][1] - arr[j][1];
            distance = Math.hypot(x, y);
            
            if (distance < minDistance) {
                minDistance = distance;
                point1 = arr[i];
                point2 = arr[j];
            }
        }
        
    }              
    return [point1, point2];
}

//console.log(closestPoints(numberOfPoints));



// Task 2
function meeting (arr, need) {
    let chair = 0; 
    let newArr2 = [];     
    let newArr = arr.map(item => item[1] - item[0].length).map(item => item > 0? item: 0);
    let spareChairs = newArr.reduce((a, b) => (a + b), 0);

    if (spareChairs < need) {
        return 'Not enough!';
    }

    if (need == 0) {
        return 'Game On';
    }

    for (let i = 0; i < newArr.length; i++) {
        chair += newArr[i];
        
        if (chair <= need) {
            newArr2.push(newArr[i]);
        }
    }

    if (newArr2[newArr2.length-1] == 0) { //обрезаем последний 0, т.к. во 2м примере +0 все еще <=need
        newArr2.pop(); 
    }
    
    return newArr2;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXX{', 6], ['X', 2], ['XXX{XX', 8], ['X', 3], ['XXX', 1]], 5)); 
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 6));
