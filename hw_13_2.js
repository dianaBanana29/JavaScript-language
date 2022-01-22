let ar = [10,11,12,13,14,15,16];

function MyForEach(array, funct) {
    let len = array.length;
    for(let i = 0; i < len; i++){
    funct(ar[i], i, array);
}
}

let str = '';
MyForEach(ar, num => str += ' *' + num);
console.log('task 1')
console.log(str);

console.log('task 2');
function MyMap(array, funct) {
    let newArray = [];
    let len = array.length;
    for(let i = 0; i < len; i++){
    newArray.push(funct(ar[i]));   
}
console.log(newArray);
}
MyMap(ar, num => num * 2);


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