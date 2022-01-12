//1
console.log('a'+ -'b'+'as');
//2
function calc(num1,num2,action)
{
    switch(action){
        
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
console.log(calc(5,3,'*'));
//3
function one(x){
    return function two(y,z){
return x + y + z;
    };
}
console.log(one(5)(3,4));
