                             // JSON Object: JavaScript Object Notation - part 2


//---------------------------------------EXAMPLE 1--------------------------------------------------
//ADDITION
const addition = (a, b) => a + b;
let res = addition(10, 20);
console.log(res);

//SUBTRACTION
const substraction = (a, b) => a - b;
let res2 = substraction(10, 20);
console.log(res2);

// FIND THE MAX NUMBER
const maxNumber = (a,b,c) => {
    if (a > b && a > c) return a;
else if (b> a && b> c) return b;
else return c;
}
console.log(maxNumber(10, 20, 30));


//---------------------------------------EXAMPLE 2--------------------------------------------------
// calculate factorial of number.

const fact = (a) => {
    let r = 1;
    for (let i = 1; i <= a; i++) {
        r = r * i;
    }
    return r;
};
let result = fact(5);
console.log(result);
