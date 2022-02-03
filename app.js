

function MyArray(initialValue){
  this.value = initialValue;
  this.array = [];
}
MyArray.prototype.get = function(index){

return this.array[index]  ?? this.value;
}
MyArray.prototype.set = function(index, value){
  return this.array[index] = value;
}
MyArray.prototype.setValue = function(value){
  this.value = value;
  this.array = [];
}
const myArray = new MyArray(10);
myArray.set(20,0);
console.log("should be 0", myArray.get(20));
/*task 2
to write constructor MyArray
const MyArray = new MyArray(10);
MyArray.get(index) - result 10;
write method "get" getting an index value and returning common value(set in constructor)
MyArray.set(index, value) (I think its method "splice")
write method set that sets a given value at a given index
myArray.setValue(value) - sets new value in all elements of myArray
Example: 
const myArray = new MyArray(10);
console.log(myArray.get(100)) display - 10
myArray.set(100,500) sets 500 at index 100
console.log(myArray.get(200)) display - 10
console.log(myArray.get(100)) display - 500
myArray.setValue(300)
console.log(myArray.get(100)) display - 300
*/
