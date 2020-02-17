cars //Массив с объектами


function countColor(carsArr){
    //Выдает в виде массива все цвета всех машин в исходном массиве
    //['БІЛИЙ', "ЧОРНИЙ", "БЛАКИТНИЙ", ...]
    
    return Array.from(new Set(carsArr.map(item => item.COLOR)));
}


function maxColor(carsArr){
    //Выдает в виде строки цвет наиболее часто встречаемый в массиве
    //'ЗЕЛЕНИЙ'
    
    let colors = carsArr.map(item => item.COLOR);
    let count = 0;
    let max = 0;
    let result = "";

    for (let i = 0; i < colors.length; i++) {
              
        for (let j = i + 1; j < colors.length; j++) {
                
            if(colors[i] === colors[j]){
                count++;
            } 
        }
        
        if (count > max){
        max = count;
        result = colors[i];
        }
    
        count = 0;
    }

    return result;
}


function countCars(carsArr){
//Выдает массив объектов с именем ОВД и количеством автомобилей
    
    let ovd = carsArr.map(item => item.OVD);
    let obj = {};
    let res = [];
    
    
    for (let i in ovd) {
        obj[ovd[i]] = (obj[ovd[i]] || 0) + 1;
    }

    res = Object.entries(obj).map(function(item, index) {
        let obj2 = {};
        obj2['OVD'] = item[0];
        obj2['count'] = item[1];
        return obj2;
    });

    return res;
}



function oldAndNew(carsArr){
    //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
    //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]
    
    let arr = carsArr.sort((a,b) => (a.THEFT_DATA > b.THEFT_DATA)? 1: -1);
    
    let oldCar = {};
    let newCar = {};
    let result = [];

    oldCar['name'] = arr[0].BRAND;
    oldCar['date'] = arr[0].THEFT_DATA;

    newCar['name'] = arr[arr.length-1].BRAND;
    newCar['date'] = arr[arr.length-1].THEFT_DATA;

    result.push(oldCar, newCar);

    return result;
}

console.log(countColor(cars));
// 242
console.log(maxColor(cars));
// ЧОРНИЙ
console.log(countCars(cars));
//796
console.log(oldAndNew(cars));
// (2) [{…}, {…}]
//0: {name: "MERCEDES-BENZ - VITO 115 CDI (Легковий автотранспорт)", date: "1929-10-21T00:00:00"}
//1: {name: "ГАЗ - 3302 (Вантажний автотранспорт)", date: "2020-02-11T00:00:00"}