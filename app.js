function getRandomNumber2(min, max) {
  if(min > max){[min, max] = [max, min]}
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function concatenate(prefix) {
 return status =>  prefix + status;
 }

// TEST FUNCTIONALITY
function test() {
console.log(getRandomNumber2(15, 1));
const concatApp = concatenate('App - ')
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);
}
test()