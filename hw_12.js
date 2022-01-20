/**********HomeWork_12***************/
// to write function
 //TODO
   // returns matrix with replaced columns into rows and rows into columns
   //rows that are columns of the source matrix
   //example: source matrix [[1, 2],[3, 4],[5, 6]]
   // result matrix [[1,3,5],[2,4,6]]
let matrix = [[1, 2],[3, 4],[5, 6]];
function matrixTransp(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i]= temp;
        }
    }
}

/**********************version of Yuriy*************************/
function matrixTransp1(matrix) {
    const res = [];

    for(let i = 0; i < matrix[0].length; i++) {
        res.push([]);
        for(let j = 0; j < matrix.length; j++) {
            res[i].push(matrix[j][i]);
        }
    }
}

function displayMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++){
        let row ='';
        for(let j = 0; j < matrix[i].length; j++) {
            row = row + matrix[i][j]+ ' ';
        }
        console.log(row);
    }
      }
matrixTransp(matrix);     
displayMatrix(matrix);

const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27];
//output - [-10, 4, 28, 40, 27, 25,  17, 15, 13]
//task - write a comporator(it returns < 0 if first less than second, 
//> 0 if first greater, == 0 if first equals second)

const comparator = (n1, n2) => {
let res = n1 % 2 - n2 % 2;
if(res == 0) {
    res = n1 % 2 == 0 ? n1 - n2 : n2 - n1
}
 return res         
}
arHW.sort(comparator);
console.log(arHW);