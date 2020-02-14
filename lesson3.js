// concat() +
function myConcat (str, ...arg) {
   for (let i = 0; i < arg.length; i++) {
       str += arg[i]};

   return str;
}

console.log(myConcat('В JavaScript ', 'любые ', 'текстовые данные ', 'являются ', 'строками'));
console.log(myConcat('В ', 'JavaScript ', 'любые ', 'текстовые ', 'данные ', 'являются ', 'строками'));



// lastIndexOf()
function myLastIndexOf (str, substr) {
   let index = 0;
   
   for (let i = 0; i < str.length; i++) {
       if (str[i] === substr) {index = i}}
   
   return index;
}

console.log(myLastIndexOf ('java', 'a'));
console.log(myLastIndexOf ('simultaneously', 'u'));
console.log(myLastIndexOf ('together', 't'));
console.log(myLastIndexOf('В JavaScript любые текстовые данные являются строками', 'а'));



// includes()
function myIncludes (str, substr) {
    let result = false;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substr) {result = true}}     
    
    return result;
}

console.log(myIncludes ('java', 's'));
console.log(myIncludes ('simultaneously', 'u'));
console.log(myIncludes ('together', 'w'));
console.log(myIncludes('В JavaScript любые текстовые данные являются строками', 'люб'));



// repeat() +
function myRepeat (str, count) {
    let repeatStr = '';
    
    for (let i = 1; i <= count; i++) {
        repeatStr+= str + ' ';}     
    
    return repeatStr;
}

console.log(myRepeat ('java', 4));
console.log(myRepeat ('simultaneously', 2));
console.log(myRepeat('В JavaScript любые текстовые данные являются строками', 2));



//substring() +
function mySubstring (str, start, end) {
    let substring = '';
 
    for (let i = start; i < end; i++) {
        substring += str[i];}
         
    return substring;
 }
 
 console.log(mySubstring('java', 1, 2));
 console.log(mySubstring('simultaneously', 1, 5));
 console.log(mySubstring('В JavaScript любые текстовые данные являются строками', 2, 5));


//substr() +
function mySubstr (str, start, length) {
   let substr = '';

   if (start >= 0) {
      for (let i = start; i <= start + length - 1; i++) {
        substr += str[i];}
        
   } else {
       for (let i = str.length + start; i <= str.length + start + length - 1; i++) { 
        substr += str[i];} }    
        
    return substr;
} 

/* Если передано отрицательное число, она трактуется как strLength - start, 
где strLength равна длине строки (например, если параметр start равен -3, 
    то он трактуется как strLength - 3.)*/
console.log(mySubstr('java', 1, 2));
console.log(mySubstr('simultaneously', 0, 4));
console.log(mySubstr('java', -2, 2));
console.log(mySubstr('simultaneously', -3, 2));
console.log(mySubstring('В JavaScript любые текстовые данные являются строками', 0, 5));