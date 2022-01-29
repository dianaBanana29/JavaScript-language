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

/***********************class work 15 ********************* */

//input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "b"]
//output: lmn -> 3, a - 2, d - 2, bc - 1; 

function displayOccurrences(array) {
//creating object with key - element of array(string as an element of array)
//value - occurrences count
//difference between obj = {a : 123, d : "abc"}; const a = "d"; 
//obj.a === 123, obj[a] === abc
//obj.c = 10 -> {a : 123, d: "abc", c : 10}
const res = {};
for(let i = 0; i < array.length; i++) {
    if(res[array[i]]=== undefined) {
        //string as content of arrray[i] occurres first time
        res[array[i]] = 1;
    }
    else{
        res[array[i]] = res[array[i]] + 1;
    }
} 
//console.log(res); 
Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) : res;
}).forEach(e => console.log( `${e[0]} -> ${e[1]}`))

}
const ar5 = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "b"];
displayOccurrences(ar5);


/*HomeWork 15*******************************************************
                                task 1
refactoring of displayOccurrence function
 line  48 to 55 must be separated function
 that separated function should apply standart methods like reduce

                                 task 2
    write useful function countBy(array, callback) that returns object
     with keys as grouping  criteria and value as the occurrence counts 
     keys should be sorted - optional
     where array - any array, callback function - function< returning grupping criteria
     const arr = ["6.4, 7.3, 6.5, 6.9"];
     const statistic = countBy(arr, (element) => Math.floor(element) ) 
     result: statistic -> {"6: 3, 7 : 1"} 
     or  
     const arr1 = ['abcd', 'lmnr', 'ab', 'dddd']      
     const statistics = countBy(array, element => element.length)
     result : statistics = {4 : 3, 2 : 1 }           
*/