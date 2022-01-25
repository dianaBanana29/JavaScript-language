const person1 = {id: 123, name: 'Moshe',addres: {city: 'Lod', street: 'Sokolov'}};//same content of objects with different references
const person2 = {id: 123, name: 'Moshe',addres: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1; // same objects with the same reference

console.log(`person1 == person2 is ${person1 == person2}`);
console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 == person3 is ${person1 == person3}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2)is 
${JSON.stringify(person1) === JSON.stringify(person2)}`);// === - compares not only content but also data types
console.log(JSON.stringify(person1));// converts object to string, JAVA SCRIPT OBJECT NOTIFICATION
console.log(`name of person1 is ${person1.name}`); //method of  the acces to value throw key
console.log(`person1 lives in ${person1.addres.city}`);//acces to object inside object throw two dots
Object.keys(person1).forEach(k => console.log(k));//returns array of  all the keys of the object
Object.values(person1).forEach(v => console.log(v));//returns  array of all values of the object
Object.entries(person1).forEach(e => console.log(e));
function createAddress(city, street) {
    //{ city: city, street: street} <=> {city, street} <=== working same way, simplify of syntax
    return { city: city, street: street}
}
function createPerson(id, name, address) {
return { id, name, address}
}

const persons = [ 
    createPerson(123, "Vasya", createAddress("Rehovot", "Rotshild")),
    createPerson(124, "Olya", createAddress("Rehovot", "Plaut")),
    createPerson(125, "Daniella", createAddress("Tel-Aviv", "Dizengoff"))
]
/**************************************HW 14
 * **applying methods of array should to find the persons living in Rehovot and display them out
 * 
 * **to move persons that don't live in Rehovot at the begining  of the array persons
 */