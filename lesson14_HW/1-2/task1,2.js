// ------------------Task1------------------
function quipuCalculator (str) {
    let arrOp = ['+', '-', '*', '/'];
    let op;
    let num = [];
    let num1, num2;
    let result;
    let quipu;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arrOp.length; j++) {
            if (str.includes(arrOp[j])) {
                op = arrOp[j];
                num = str.split(op);
             }
        }
    }

    function fromQuipuToNumber (str) {
        
        str = str.split('~').map(item => item.length).join('');   
        if (str[str.length-1] === '0') {
            str = str.slice(0, str.length-1);
        }     
        return str;
    }

    num1 = fromQuipuToNumber(num[0]);
    num2 = fromQuipuToNumber(num[1]);

    
    switch(op) {
        case '+':
            result = +num1 + +num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
        break;
    }


    quipu = result.toString().split('').map(item => '@'.repeat(item)).join('~');

    if (quipu[quipu.length-1] === '~') {
        quipu.concat('~')
    }
    
    return quipu;
}

// console.log(quipuCalculator('@~@@*@@'));//@@~@@@@
// console.log(quipuCalculator("@~@@+@@~~"));//@@@~@@
// console.log(quipuCalculator("@~@@/@@"));//@@@@@@
console.log(quipuCalculator("@~@@-@@"));//@~??
// console.log(quipuCalculator("@~~~@@+@@"));//@@@@@@


// ------------------Task2------------------





