function encode(num, base){
    //base from 2 to 10
    let res = "";
    do{
   const digit = Math.trunc(num % base);
   const symb = getSymbol(digit);
   res = symb + res;
   num = Math.trunc(num/base);
    } while(num >= 1);
    return res;
}
function getSymbol(digit) {
    return "" + digit//it will work only for base <=10
}
console.log(encode(10,2));
//const string = "dina";
function checkDuplicate(string){
    return new Set(string).size !=stringProcessing.length;
}
console.log(checkDuplicate("diana"));