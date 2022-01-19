const ar = [2, 100, 9, 80];
ar.sort(function (a, b) {
    return a - b;})
ar.sort((a,b) => a - b);//Arrow function
ar.sort((a,b) => {return a - b})
console.log(`ar is ${ar.toString()}`);
//*******************adding elements at the end of array******************/
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [8, 30, -57];
//ar.push(ar1);// pushes array inside another array, but like one element, for adding numbers from array use sprad operator(...)
ar.push(...ar1);
console.log(ar);
//for adding element to beginning, exists method "unshift"
//everything has been said for push, will work for unshift only unlike "push" unshift method
//adds elements to the beginning
const ar2 = [27, 35];
ar.unshift(...ar2);// <---------spread
console.log(ar);
//method "splice" for inserting or replacing any elements in any place
//first  argument - index for inserting or replacing 
//second argument - amount of the deleted elements(if 0, than splice will be apply only for inserting)
//third argument - designates sequence of being of being inserted element like push/unshift
ar.splice(2,0,1,2);
console.log(ar);
//removing/deleting
let el = ar.pop();//removes last element and returns it to place of call;
// output - el = -57 - in array it will be removed
el = ar.shift();//removes first element from array and returns it
//output - el = 27, removed from array
console.log(ar);
ar.splice(3,5);//remove 5 elements beginning from the one at index 3
console.log(ar);
  //includes, indexOf
  // two dimentional arrays
  const matrix =[[1,2,3], [4,5,6], [7,8,9]];
  const matrix2 = [[100, 20],[50, -5],[34, 28]];
  function displayMatrix(matrix) {
for(let i = 0; i < matrix.length; i++){
    let row ='';
    for(let j = 0; j < matrix[i].length; j++) {
        row = row + matrix[i][j]+ ' ';
    }
    console.log(row);
}
  }
  displayMatrix(matrix2)

  /**********HomeWork_12***************/
const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27];
//output - [-10, 4, 28, 40, 27, 25,  17, 15, 13]
//task - write a comporator(it returns < 0 if first less than second, 
//> 0 if first greater, == 0 if first equals second)

// to write function 
function matrixTransp(matrix){
    //TODO
   // returns matrix with replaced columns into rows and rows into columns
   //rows that are columns of the source matrix
   //example: source matrix [[1, 2],[3, 4],[5, 6]]
   // result matrix [[1,3,5],[2,4,6]]
}