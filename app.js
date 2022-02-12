function getRandomNumber(min, max) {
  let float = min + Math.random() * (max + 1 - min);// for what to swap, if its works without?
  return Math.round(float);
}

function getRandomNumber1(min, max) {
  return min > max ? Math.floor(Math.random() * (min - max + 1)) + max : Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber2(min, max) {
  if(min > max){[min, max] = [max, min]}
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function concatinate(prefix) {
//TODO
// that by using the following code
let str = '';
return str += prefix;
// there should be displayed out App-Test status: Done
}

// TEST FUNCTIONALITY
function test() {
const concatApp = concatinate('App - ')
const concatMessage = concatApp + ('Test status: Done');
console.log(concatMessage);
console.log(getRandomNumber2(15, 1));
console.log(getRandomNumber1(15, 1));

}
test()