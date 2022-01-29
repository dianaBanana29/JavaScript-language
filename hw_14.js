function myForEach(array, call) {
    for(let i = 0; i< array.length; i++) {
        call(array[i], i, array);
    }
}

/*function myFilter(array, callPredicate) {
    const res = [];
    function forEachCall(n, i, a) {
        if(callPredicate(n, i, a)) {
            res.push(n);
        }
    }
    myForEach(array, forEachCall);
    return res;
}*/

function myFilter(array, callPredicate) {
    const res = [];
    
    myForEach(array, (n, i, a) => callPredicate(n, i, a) && res.push(n))/*
    */
    return res;
}

function myReduce(array, callbackReduce, initial)
{
    if(initial === undefined) {
        initial = array[0];
        array = array.slice(1);
    }
    let res = initial;
    //function foreachCallback(n, i, a) {
      //  res = callbackReduce(res, n, i, a);
    //}
    myForEach(array, (n, i, a) => res = callbackReduce(res, n, i, a));
    return res;
}


