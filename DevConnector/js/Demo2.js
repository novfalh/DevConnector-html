// Addition of 2 numbers 
// Input : 2 numbers
// Output : sum of 2 numbers (single result)
//Process: no.1 + no.2 
var number1 = 100; 
var number2 = 200;
var result = number1 + number2;

console.log("addition =" + result);


// Subtraction of 2 numbers 
// Input : 2 numbers
// Output : subtract of 2 numbers (single result)
//Process: no.1 - no.2 
var number1 = 500; 
var number2 = 200;
var result = number1 - number2;

console.log("subtraction =" + result);

// Swapping 2 numbers using 3rd variable
var a = 10;
var b = 20;
var c;

c = a;
a = b;
b = c; 
console.log("value of a = " + a + ", value of b = " + b + ", value of c = " + c);

//assignment -----  Swapping 2 numbers without using 3rd variable - HINT: + , - , =

//MOD -- returns the remainder of the two numbers after division.
var a = 55;
var b = 2; 
var result = a % b;
console.log("MOD = " + result);

// relational operators - used to express relation ( >< , >=, <= , == , ===) 
var a = true; //js consider Boolean as 0 & 1 --- true = 1 & false = 0
var b = "true"; // "true is a string, cant be converted to a number "

// == is TRUE when the two values are same and FALSE otherwise (the type is different - it does not matter)
console.log(a == b);

// == is FALSE when the values are same but the types are different - it matters if theres a difference
console.log(Number (a) === 1); // NUMBER is used to convert Boolean to numbers 
