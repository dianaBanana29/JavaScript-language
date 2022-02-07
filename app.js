class Person{
  #id;
  #name;
  constructor(id, name){
    this.#id = id;
    this.#name = name
  }
  getId(){
    return this.#id;
  }
  getName(){
    return this.#name;
  }
  toString(){
    return   `id: ${this.#id}, name: ${this.#name},`;      //JSON.stringify(this); - for not private settings
  }
}
const person = new Person(123, 'Vasya');
console.log(`person is ${person}`);
class Employee extends Person {
  #salary;
  constructor(id, name, salary){
  super(id, name); // calls the constructor of class Person
  this.#salary = salary;
  }
  computeSalary(){
    return this.#salary
  }
  toString(){
    return super.toString() + ` salary: ${this.computeSalary()}`;
  }
}
const person2 = new Employee(124, "Sara", 16000);
console.log(`person2 is: ${person2}`);
console.log(typeof(person2));// just object
console.log(person2.constructor.name)// only this way JS allows to get class name
class Child extends Person{
  #kinderGarden
  constructor(id, name, kindergarden){
    super(id, name);
    this.#kinderGarden = kindergarden;
  }
  getKinderGarden(){
    return this.#kinderGarden;
  }
  toString(){
    return `${super.toString()} kindergarden: ${this.#kinderGarden}`;
  }
}
const person3 = new Child(125, "Yakob", "shalom");
console.log(`person3 is: ${person3}`);

class WageEmployee extends Employee {
  #hours;
  #wage;
  constructor(id, name, salary, hours, wage) {
    super(id, name, salary);
    this.#hours = hours;
    this.#wage = wage;
  }
  computeSalary(){
    return super.computeSalary() + this.#hours * this.#wage
  }
}
const person4 = new WageEmployee(126, 'Asaf', 7000, 10, 1000);
console.log(`person4 is; ${person4}`);

 
 
 console.log('********HOMEWORK**********');
  //*************************1******************** */ 
 function countOfType(persons, type){
   const res = persons.reduce((sum, n )=> {n.constructor.name === type ? sum += 1: sum; return sum;}, 0);
   return res;
   //return person.filter(p => p.constructor.name === name) <-----definition of Yuriy
 //returns count of persons of the given type}
 //Example: countOfPersonType(persons(its must be string), "WageEmployee") ----> 1
 }
 //**************************2********************** */
 function computeSalaryBudget(persons){
  //return persons.reduce((sum, per) => {per.constructor.name !== "Child" ? sum += per.computeSalary() : sum;
  //return sum}, 0)
  const allEmloyees = persons.filter(p => p.computeSalary)
  return allEmloyees.reduce((res, cur) => res + cur.computeSalary(),0) 
  // return total salary of all employees in the given array}
 // Example: computeSalaryBudget(persons) ----> 3000}
   }
   //*********************3************************ */
   //function countChildrenInGarden(persons, garden){
   // return persons.reduce((res, per) => {per.constructor.name === "Child" 
   // && per.getKinderGarden() === garden
    //&& res++; 
    //return res}, 0)
  const allChildren = getPersonsType(persons, 'Child');
  return allChildren.reduce((res, cur) => cur.getKinderGarden() === kindergarden? res + 1 : res, 0)
 //returns number of children in the given array}
 // Example: countChildrenInGarden(persons, Shalom) ----> 2
 }


//     TEST FUNCTIONALITY
const persons = [
  new Child(100, 'Pol', "Shalom"), new Child(101, "Sergey", "Boker"),
  new Child(102, "Gabi", "Shalom"), new Employee(103, "Niv", 10000), 
  new WageEmployee(104, "Nik", 10000, 10, 90)];
    

 console.log(`Choosed type: ${countOfType(persons, "Child")}`);
 console.log(`Salary Budget is: ${computeSalaryBudget(persons)}`);
 console.log(`Children in garden are: ${countChildrenInGarden(persons, "Shalom")}`);


 function Deferred() {
  this.functions = []
}
Deferred.prototype.then = function(thenFn) {
  this.functions.push(thenFn);
}
Deferred.prototype.resolve = function(res) {
  this.functions.forEach(fn => res = fn(res));

}
   const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');