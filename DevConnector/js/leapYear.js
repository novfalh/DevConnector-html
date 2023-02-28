//in between every 4 years
// century every 400 years


var year = 2000;
console.log(year);


console.log(year % 4);
console.log(year % 400);

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("yae is a leap year");
}
else{ 
    console.log("yae is not a leap year");
}

// 5 or 5+ then you are pass else you are fail.

var score= 12;
if (score >= 5) {
    console.log("you are pass");
}
else{
    console.log("you are fail");
}


var score= 7;
if (score >= 9 && score <= 10) 
{
    console.log("A"); 
}
else if (score >= 8 && score < 9) 
{
    console.log("B");
}
        
else if (score >= 7 && score < 8) 
{
    console.log("C");
}
else if (score >= 6 && score < 7) 
{
    console.log("D");
}

else 
{
    console.log("fail");
}

