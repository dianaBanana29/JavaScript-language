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
 return status =>  prefix + status;
 }

// TEST FUNCTIONALITY
function test() {
console.log(getRandomNumber2(15, 1));
console.log(getRandomNumber1(15, 1)); 
const concatApp = concatinate('App - ')
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);
}
test()