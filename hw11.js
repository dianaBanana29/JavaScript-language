
function encode(num, codingString){
    let res = "";
    if(checkDuplicate(codingString) == true){
        console.log('Error: duplicate symbols in coding string');
    
    }
    else{
    do{
   const digit = Math.trunc(num % (codingString.length-1));
   const symb = getSymbol(digit, codingString);
   res = symb + res;
   num = Math.trunc(num/(codingString.length-1));
    } while(num >= 1);
    return res;
}
function getSymbol(digit, codinString) {
    let char = codinString[digit];
    return "" + char;
}

}
function checkDuplicate(codingString){
    
    return new Set(codingString).size != codingString.length;
}
console.log(encode(11,'dina'));
