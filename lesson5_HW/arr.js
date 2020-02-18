// pop()
function myPop (arr) {
    if (arr.length == 0) {
        return undefined;
    } else {
        let lastElement = arr[arr.length-1];
        arr.length = arr.length - 1;
        return lastElement;}
}

//console.log(myPop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(myPop(['apple', 'pineapple', 'cherry', 'lemon']));
//console.log(myPop([]));



// push()
function myPush (arr, ...arg) {
    let newArr = [];
  
    for (let i = 0; i < arr.length + arg.length; i++) {
        if (i < arr.length) {
            newArr[i] = arr[i];
        } else {
            newArr[i] = arg[i - arr.length]
        }
    };

    return newArr.length;
}

//console.log(myPush([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 12, 13));
//console.log(myPush(['apple', 'pineapple', 'cherry', 'lemon'], 'banana', 'orange'));



//shift()
function myShift (arr) {
    if (arr.length == 0) {
        return undefined;
    } else {
        let firstElement = arr[0];     
        for (let i=0; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
        }
        arr.length = arr.length - 1;
        return firstElement;}
}

//console.log(myShift([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(myShift(['apple', 'pineapple', 'cherry', 'lemon']));
//console.log(myShift([]));



// unshift()
function myUnshift (arr, ...arg) {
    let newArr = [];
  
    for (let i = 0; i < arr.length + arg.length; i++) {
        if (i < arg.length) {
            newArr[i] = arg[i];
        } else {
            newArr[i] = arr[i - arg.length]
        }
    };

    return newArr.length;

}

//console.log(myUnshift([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20, 21, 22));
//console.log(myUnshift(['apple', 'pineapple', 'cherry', 'lemon'], 20, 21, 22));


// concat()
function myConcat (arr, ...rest) {
    
    for (let i = 0; i < rest.length; i++) {
        if (Array.isArray(rest[i])){
            rest[i].forEach(el => arr.push(el))
        } else {
            arr.push(rest[i])
        }
    }
    return arr;

}

//console.log(myConcat([1,2,3], 6, [4,5]));
//console.log(myConcat([1,2,3], [4,5], 6));

// map task
let fruits = ['Яблоко', 'Банан', 'Ананас'];
function mapReduce (arr) {
    return fruits.reduce((a, b) => {
        a.push(b[0]);
        return a}, [] );
}
//console.log(mapReduce(fruits));


// filter task
function filterReduce (arr) {
    return fruits.reduce((a, b) => { 
        if (b[0].toLowerCase() === 'а') {
            a.push(b);}
            return a}, [] );
}
//console.log(filterReduce(fruits));


// forEach task
function forEachReduce (arr) {
    return fruits.reduce((a, b, index) => {
                    b = `${index+1}: ${b}`;
                    a.push(b);
                    return a}, [] );
}
//console.log(forEachReduce(fruits));