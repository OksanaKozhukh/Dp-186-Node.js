//-------------------Task1-------------------

function getSolution(arr, sum) {
    let arrSum = arr.reduce((a,b) => {
        if (a > sum) {
            a - b;
        } else {
            a + b;
        }
        return a;
    });
    
   
    return arrSum;

}

console.log(getSolution([15, 2, 3], 10));


//-------------------Task2-------------------

function countdown (ms) {
  
    let result = '';
    let sign = ms >= 0? '+': '-';

    let hour = Math.floor(Math.abs(ms/3600000));
    let min = Math.floor(Math.abs((ms % 3600000)/60000));
    let sec = Math.floor((Math.abs(ms) - hour*3600000 - min*60000)/1000);

    let count = [0, 0, 0];

    hour.toString().length < 2? count[0] = [0, hour]: count[0] = hour.toString().split('');
    min.toString().length < 2? count[1] = [0, min]: count[1] = min.toString().split('');
    sec.toString().length < 2? count[2] = [0, sec]: count[2] = sec.toString().split('');
 
    result = count.map(item => item.join('')).join(':');

    return sign.concat(result);
}

// console.log(countdown(40000));//+00:00:40
// console.log(countdown(-4000));// -00:00:04
// console.log(countdown(61000));// +00:01:01
// console.log(countdown(-64000));// -00:01:04
// console.log(countdown(360000000));// +100:00:00
// console.log(countdown(36309500));// +10:05:09
// console.log(countdown(-154800000));//-43:00:00
// console.log(countdown(0));// +00:00:00




