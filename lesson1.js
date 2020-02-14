function nextVersion (str) {
   /*let num = +str.split('.').join('') + 1;
   let newStr = String(num).split('').join('.');
   
   return newStr;*/
   let arr = str.split('.').map(item => Number(item));
   
   arr[arr.length-1]+=1;

   for (let i = arr.length - 1; i > 0; i--) {

      if (arr[i] > 9) {
        arr[i] = 0;
        arr[i - 1] += 1;
      }
    }
   
   return arr.join('.');   
}


console.log(nextVersion("1.2.3") === "1.2.4");

console.log(nextVersion("0.9.9") === "1.0.0");

console.log(nextVersion("1")  === "2" );

console.log(nextVersion("1.2.3.4.5.6.7.8")=== "1.2.3.4.5.6.7.9" );

console.log(nextVersion("9.9") === "10.0");
