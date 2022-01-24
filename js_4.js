const ar = [-10, 2, -7, 80, 20];
ar.push(70);
//solution, based on substring
/*let str = '';
ar.forEach(function(n) {
    str += n + '#';
})
str = str.substring(0,str.length - 1);
const lastSharpIndex = str.lastIndexOf('#');
const str1 = str.substring(0, lastSharpIndex);
const str2 = str.substring(lastSharpIndex + 1);
str = str1 + str2;
console.log(str);*/


/******solution, based on forEach 
const ar1 = ar.slice(1);
let str = ' ' + ar[0];
ar1.forEach(n => str += '#'+ n);
console.log(str);*/

/********* printing out sequense number of element, element, length of array */

//ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));


/****************Home work 13******************** 
 * write function myForEach(array, callback - function)
 * array - being iterated array
 * callback - function - the function that wiil be called for each element of array 
 * callback - function should take three arguments: current element, current index, being iterated array
 * example of calling  myForEarch: myForEach(array,n => str += '#'+ n)
*/

/* write function myMap(array, callback - function)
 * array - being iterated array
 * callback - function - the function that wiil be called for each element of array 
 * callback - function should take three arguments: current element, current index, being iterated array
 * example of calling  myForEarch: myForEach(array,n => str += '#'+ n)
*/

/*****************************map*************************/
//method map
//use case of applying method map : you want to create new array with elements that are recieved as result of some conversion
//example: you want to get new array with elements that are multiplication on 2 of each source element
const ar2 = ar.map(n => n * 2);
//console.log(ar2);
const ar3 = ar.map((n, i, a)=> `<li>${i + 1} of ${a.length} - ${n}<li>`);
//console.log(ar3);


///////////////////////////24.01
 const ar20 = [13,17,20,23,25, 40];
 const arEvenOdd = ar20.filter((n, _i , a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
 //console.log(arEvenOdd);

/*********************************HW 14********************************
 * TODO write myFilter(array, callback) based on myForEach
 * callback -  function with 3 possible parameters - current element, index and array
 * 
 * write myFilter(array, callback, initial result) based on myForEach
 * callback -  function with 3 possible parameters - current element, index and array
 * if the user call doesn't contain a second argument , then first element of the array will considered as initial result
 * ( in this case iteration begins from the second element of the array)
 */
let res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
console.log(max);
//reduce with no second argument
res = ar20.reduce((res, cur) => res + cur);
console.log(res);

