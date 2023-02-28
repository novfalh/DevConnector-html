var number= 5; 
var counter= 0;
 while (counter <= number) {
    console.log(counter);
    counter= counter + 1;

 }

 //print even number
var number= 50; 
var counter= 0;
 while (counter <= number) {
    if (counter % 2 === 0) {
        console.log(counter);
    }
    counter= counter + 1;
 }

 //the number from 1 to 50 which are divisible by 3 and 7
 var number= 50; 
var counter= 0;
 while (counter <= number) 
 {
    if (counter % 3 === 0 && counter% 7===0) {
        console.log(counter);
    }
    counter= counter + 1;
 }
 
 // print number from 50 to 1.(reverse order)
 var number= 1; 
var counter= 50;
 while (counter >= number) 
 {
    console.log(counter);
    counter= counter - 1;
 }
//floor 

var number= 1239;
var sum = 0; // to hold sum of digits
var digits = 0; //to hold the digits
   digits = number % 10;
   console.log(digits);
   
   number = Math.floor (number / 10);
   console.log(number);

 //sum
 var number= 1239;
 var sum = 0; // to hold sum of digits
 var digits = 0; //to hold the digits
 while ( number > 0) 
 {
    digits = number % 10;
    
    sum = sum + digits;

    number = Math.floor (number / 10);
 }
 console.log(sum);

