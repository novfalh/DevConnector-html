// factorial of number 
// reverse a number ex 1234 the reverse will be 4321
var number= 1234;
var digits = 0;
var reverse = 0;
var number2= 1234
while (number>0){
    digits = number % 10;  
    reverse = reverse * 10 + digits;  
    number = Math.floor(number/10);  

 }
 console.log(reverse);

 if (number2 ==reverse){
    console.log("number2 is a palindrome");
 }
 else{
    console.log("number2 is not a palindrome");
 }
//  palindrome number ex 121, if it ben reverse it will stay the same 121
 var number= 121;
var digits = 0;
var reverse = 0;
var number2= 121
while (number>0){
    digits = number % 10;  
    reverse = reverse * 10 + digits;  
    number = Math.floor(number/10);  

 }
 console.log(reverse);

 if (number2 ==reverse){
    console.log("number2 is a palindrome");
 }
 else{
    console.log("number2 is not a palindrome");
 }

// strong number ex 1! 2! 3! 4! 5!.
var number = 145;
var digits = 0;
var sum = 0;
var temp = 145;
var counter = 1;
var fact = 1;

while (number>0){
    digits = number % 10;
    console.log(digits);
    number= Math.floor(number/10);
while (counter<= digits){
    fact = counter * temp;
    temp = temp * temp
    counter++;}
}
sum = sum + fact;
fact = 1;