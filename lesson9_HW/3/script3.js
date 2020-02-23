// --------------------- Task3 ---------------------

function getUser () {
    loadUser();
    info.value = 'Происходит загрузка данных';
}

function loadUser(){
    const aja = new XMLHttpRequest;

    aja.onload = function () {
        if(this.status == 200) {
            getStatistics(JSON.parse(this.responseText));
        } else {
            info.value = 'Ошибка в загрузке данных'
        }
    }

    aja.open('GET', 'https://randomuser.me/api/?results=1000');
    aja.send();

}

function getStatistics (data) {
    
    let obj = data.results;
    
    let objSortedByAge = obj.sort((a,b) => a.dob.age - b.dob.age);

    let objMale = obj.filter(item => item.gender == "male");
    
    let objFemale = obj.filter(item => item.gender == "female");
        
    let objMaleAverageAge = objMale.reduce((a,b) => a + b.dob.age, 0)/objMale.length
    let objFemaleAverageAge = objFemale.reduce((a,b) => a + b.dob.age, 0)/objFemale.length

    let city = obj.map(item => item.location.city);
    
    function maxCity(city){
        
        let count = 0;
        let max = 0;
        let maxCity = "";
    
        for (let i = 0; i < city.length; i++) {
                  
            for (let j = i + 1; j < city.length; j++) {
                    
                if(city[i] === city[j]){
                    count++;
                } 
            }
            
            if (count > max){
            max = count;
            maxCity = city[i];
            }
        
            count = 0;
        }
    
        return `город: ${maxCity}, количество юзеров: ${max}`;
    }


    info.value = `Самый молодой юзер - возраст: ${objSortedByAge[0].dob.age}, имя: ${objSortedByAge[0].name.first}, фамилия: ${objSortedByAge[0].name.last}. 
Самый старший юзер - возраст: ${objSortedByAge[objSortedByAge.length -1].dob.age}, имя: ${objSortedByAge[objSortedByAge.length -1].name.first}, фамилия: ${objSortedByAge[objSortedByAge.length -1].name.last}.
Количество мужчин в выборке - ${objMale.length}.
Количество женщин в выборке - ${objFemale.length}.
Средний возраст мужчин в выборке - ${Math.round(objMaleAverageAge)}.
Средний возраст женщин в выборке - ${Math.round(objFemaleAverageAge)}.
Город с наибольшим количеством юзеров в выборке - ${maxCity(city)}.`;

}

getUser();



