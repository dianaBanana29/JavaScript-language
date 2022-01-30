function OccuCounter(array) {
 const count = array.reduce((accum, curr) => {
   accum[curr] = (accum[curr] || 0) + 1;
   return accum;
 }, {})
 return count;
}


function displayOccurrences(array) {
 const res = OccuCounter(array);
  Object.entries(res).sort((e1, e2) => {
      const res = e2[1] - e1[1];
      return res === 0 ? e1[0].localeCompare(e2[0]) : res;
  }).forEach(e => console.log( `${e[0]} -> ${e[1]}`))
  }

  function countBy(array, callback) {
   const res = {};
    const sum = {};
    for(i = 0;i < array.length; i++) {
    res[array[i]] = callback(array[i], i, array);}
    
    array.reduce((accum, curr, i) => {
      accum[curr] = (accum[curr] || []).concat(array[i]);
      return accum;
    }, {})
  
  }
  


  

  ////////TEST FUNCTIONALITY
  const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "b"];
  displayOccurrences(ar);
  const ar2 =  ['abcd', 'lmnr', 'ab', 'dddd'];
  console.log(countBy(ar2,element => element.length));
  
  
