const shape = {radius: 20, square: function(){
 return  3.14 * (this.radius ** 2)
}, perimeter: () => 2 * 3.14 * this.radius, toString: function(){
  return `radius of this circle is ${this.radius}`;
}};
console.log(shape.square());
console.log(`square = ${shape.square()}, perimeter = ${shape.perimeter()}`);
console.log(`shape: ${shape}`);
const circle1 = {radius: 20, square: function(){
  return  3.14 * (this.radius ** 2)
 }}

 class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  square() {
    3.14 * (this.radius ** 2);
  }
  perimeter() {
    return 2 * 3.14 * this.radius;
  }
  toString() {
    return `radius of this circle is ${this.radius}`;
  }
}


 const circle10 = new Circle(10);
 /*****************************HomeWork 16*******************************
  * output:
  * 1.hello
  * 2.a
  * 3.b
  */
 //Deferred.prototype.then = function(){
   
  //const res = 
  //return res;
 //}
/*task 2
to write constructor MyArray
const MyArray = new MyArray(10);
MyArray.get(index) - result 10;
write method "get" getting an index value and returning common value(set in constructor)
MyArray.set(index, value) (I think its method "replace")
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
Array.prototype.filter = function(callbackPredicate) {
  const res = [];
this.forEach((n, i, a) => callbackPredicate(n, i, a) && res.push(n));
return res;
}
const ar = [1, 2, 3, 4, 5, 6, 7];
ar.filter(n => n % 2 === 0). forEach(n => console.log(n));