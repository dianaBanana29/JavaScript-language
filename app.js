const str1 = "abc";
const str2 = "abc";
console.log(`str1 == str2 is ${str1 == str2}`);
console.log(`str1 < "s" is ${str1 < "s"}`);// defines in alphabet case
console.log(`"123" > 23 ${"123" > 23}`);
console.log(`"123" > "23" ${"123" > "23"}`);
/***********************************************
 * if in logical expression contains both, string and number, JS will convert string to number.
 * if string doesnt contains a number, than result of convert is "NaN"
 * In any logical expression if there is a NaN, then the result will be always false
 */
console.log(`"abc" > 23 ${"abc" > 23}`);
console.log(`"abc" < 23 ${"abc" > 23}`);
console.log(`"abc" != 23 ${"abc" != 23}`); //Js sees "!=" like "!(a==b)"
/************************************************ */
function stringProcessing(str){
    const strP = "" + str;
    console.log(`${str}[4] is ${str [4]}`)
    console.log(`length of ${str} is ${strP.length}`);
    console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`)
    console.log(`substring of "${str}" beginning from index 2 to index 5 is "${strP.substring(2, 5)}"`);
    console.log(`index of substring "ll" in the "${str}"; last index of substring l in the "${str}" is "${strP.indexOf("ll")}; ${strP.lastIndexOf("ll")}`);
}
//stringProcessing("abcd lmn ll oo tt jj");

/*********Home work 11
 * to write function 
 * function encode(num, codingString){
 * codingString - with no repeated symbols
 * algorythm the same
 * getSymbol(digit, codingString)
 * base = length of coding string
 * using operator []}
 * to do validation
 */

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