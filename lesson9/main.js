function loadData (link = 'data.csv', isJSON = false) {
    //создание объекта
    const aja = new XMLHttpRequest();
    // настройка получения данных
    /*aja.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
        console.log(`%creadyState: ${this.readyState} status:${this.status}`, 'background-color: black, color: white, padding: 5px');
        console.log(this.responseText);   
        }
    }*/

    aja.onload = function (){
        if(this.status == 200){
            showData(this.responseText, isJSON)
        }
        
    }
    //настройка отправки данных
    aja.open('GET', link)

    //отправка
    aja.send();

    return `OK. The message was sent to ${link}`
}

function showData (data, isJSON){
    const phones = isJSON? JSON.parse(data) : data.split(/\n/).map(str => str.split(';'));
    console.log(phones);
    console.table(phones);
}
loadData('./data.json', true);
/* 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready
*/