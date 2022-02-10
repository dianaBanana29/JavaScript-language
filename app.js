const point = {
  x: 3,
  y: 4
};
function displayPoinInSpace(z, t){
//"this" is a reference to any object having properties x andn y
console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t}`)
}
//displayPoinInSpace.call(point, 10, 20);
//displayPoinInSpace.myBind(point, 10, 20)();
//displayPoinInSpace.apply(point, [10, 20]);

//arguments are passed at function call

const funDisplay = displayPoinInSpace.myBind(point);
funDisplay(10, 20);
//all arguments are bound by the method myBind
const funDisplayArguments = displayPoinInSpace.myBind(point, 10, 20);
funDisplayArguments();

//mixed - part of arguments are bound by the method myBind and other part of args passed at function call
const funDisplayMixed = displayPoinInSpace.myBind(point, 10);
funDisplayMixed(20);

 Function.prototype.myBind = function(thisObj,...args){
   //"this" - reference to any functional object(in example - displayPoint)
   //thisObj - reference to any object(in example - point)
   return (...params) => {
    thisObj.method123 = this;
    const res = thisObj.method123(...args.concat(params))
    delete thisObj.method123;
    return res;
   }
 }
 point.method = displayPoinInSpace;
 point.method(10,20)

 