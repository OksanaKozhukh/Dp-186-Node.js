let messageExample ='Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her.'

function decoding (message) {
    let arr = message.split(".")
                     .map((item,index) => index==0? item: item.slice(1)) // у всех предложений, кроме 1го, удалили 1й пробел
                     .map(item => item.split(' ')) // каждое предложение разделили на массив эл.
                     .slice(0,-1); // удалили последний эл. ""
    
    let sentence1 = arr[0].map(item => item.replace(/,/g,'').length);
    
    let result = [];
    
    //console.log(arr);
    //console.log(sentence1);
    
    for (let i = 1; i < arr.length; i++) {
        if (i <= sentence1.length) {result.push(arr[i][sentence1[i-1]-1]);}
    }
    
    //console.log(result);
         
    sentence2 = arr[sentence1.length].map(item => item.replace(/,/g,'').length);
    
    for (let i = sentence1.length + 1; i < arr.length; i++) {
        result.push(arr[i][sentence2[i-sentence1.length - 1]]);
    }
    
    //console.log(sentence2);
    //console.log(result);
    
    let string = result.map((word, index) => (index == 0)? word[0].toUpperCase() + word.slice(1): word)
                       .join(' ')
                       .replace(/"/g,'') + '.';
    
    return string;
    
    
}

console.log(decoding (messageExample));
