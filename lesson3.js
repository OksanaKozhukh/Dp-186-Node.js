// concat()
function myConcat (str, ...arg) {
   for (let i = 0; i < arg.length; i++) {
       str += arg[i]};

   return str;
}

console.log(myConcat('Язык ', 'программирования ', 'JavaScript'));
console.log(myConcat('В ', 'JavaScript ', 'любые ', 'текстовые ', 'данные ', 'являются ', 'строками'));


// repeat()
function myRepeat (str, count) {
    let repeatStr = '';
    
    if (count < 0) {throw new RangeError('Repeat count must be non-negative')}
    if (count === 0) {return ''}
    if (count === +Infinity) {throw new RangeError('Repeat count must be less than infinity and not overflow maximum string size.')}

    for (let i = 1; i <= count; i++) {
        repeatStr+= str + ' ';}     
    
    return repeatStr;
}

console.log(myRepeat ('Язык программирования JavaScript', 4));
console.log(myRepeat('В JavaScript любые текстовые данные являются строками', 2));
console.log(myRepeat ('Язык программирования JavaScript', -4));
console.log(myRepeat('В JavaScript любые текстовые данные являются строками', Infinity));


//substring()
function mySubstring (str, start, end = str.length) {
    let substring = '';
    
    if (start === end) {return ''}
    
    if (start <= 0 || start === NaN) {start=0}

    if (end <= 0 || end === NaN) {end=0}

    if (start > str.length) {start = str.length}

    if (end > str.length) {end = str.length}

    if (start > end) { let temp = end; end = start; start = temp;}

    for (let i = start; i < end; i++) {
        substring += str[i];}
         
    return substring;
 }
 
 console.log(mySubstring('Язык программирования JavaScript', 1, 2));
 console.log(mySubstring('Язык программирования JavaScript', 1, 1));
 console.log(mySubstring('Язык программирования JavaScript', 1));
 console.log(mySubstring('Язык программирования JavaScript', -5, 4));
 console.log(mySubstring('Язык программирования JavaScript', 5, -4));
 console.log(mySubstring('Язык программирования JavaScript', 100, 4));
 

//substr()
function mySubstr (str, start, length = str.length) {
   let substr = '';

   if (length > str.length) {length = str.length;}

   if ((length <= 0) || (start > 0 && start >= str.length)) {return '';}

   if (start >= 0) {
      for (let i = start; i <= start + length - 1; i++) {
        substr += str[i];}
        
   } else {
       for (let i = str.length + start; i <= str.length + start + length - 1; i++) { 
        substr += str[i];} }    
        
    return substr;
} 

console.log(mySubstr('Язык программирования JavaScript', 1, 4));
console.log(mySubstr('Язык программирования JavaScript', -9, 4));
console.log(mySubstr('Язык программирования JavaScript', 5));
console.log(mySubstr('Язык программирования JavaScript', 5, -9));
console.log(mySubstr('Язык программирования JavaScript', 35, 7));


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


// lastIndexOf()
function myLastIndexOf (str, searchValue, fromIndex) {
    let index = -1;

    const startIndex = fromIndex > 0? fromIndex : 0;
    
    if(fromIndex > str.length) return -1;
    
    for (let i = startIndex; i < str.length; i++) {
        if (str[i] === searchValue) {index = i}}
    
    return index;
 }
 
 console.log(myLastIndexOf ('java', 'a', 2));
 console.log(myLastIndexOf ('simultaneously', 'u'));
 console.log(myLastIndexOf ('together', 't'));
 console.log(myLastIndexOf('Язык программирования JavaScript', 'прог'));
 
 
