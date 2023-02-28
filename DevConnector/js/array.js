let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//---------------------------------------EXAMPLE 1--------------------------------------------------
//console.log(a[0]) 
//here 0 is reffered as an index of the array
// last accessed index would be size -1 

//---------------------------------------EXAMPLE 2--------------------------------------------------
// a [100] = 20;
// console.log(a[100]); // index from 10 to 99 

//---------------------------------------EXAMPLE 3--------------------------------------------------
//to print the array - will use 'for loop'
// let i = 10;
// let b = i++; //post increment - it assign the value of i to 11

//---------------------------------------EXAMPLE 4--------------------------------------------------
// console.log('value of b ' + b); 
// console.log('value of i ' + i);


//---------------------------------------EXAMPLE 5--------------------------------------------------
// let i = 10;
// i++; 
// console.log( i); --------------------  // the answer is 10, bcz i is not assigned to anyone 

// console.log(a.length); // length of the array 


//---------------------------------------EXAMPLE 6--------------------------------------------------
// a[11] = 11;
// a[13] = 15;

//---------------------------------------EXAMPLE 7--------------------------------------------------
// a.push(15); // it will add 15 to the end of the array 



// for (var i = 0; i < a.length; i++) { 
//     console.log(a[i]);
// }
// let c = a.concat(1000, 2000,3000); // used to merge two arrays together
// console.log(c);

// console.log("befor pop method length: " + a.length);
// a.pop(); // it will remove the last element from the array

// console.log("after pop method length: " + a.length);

// //console.log("new length " + a.length);


//---------------------------------------EXAMPLE 8--------------------------------------------------
//lambda expression: form of the functions
//a.forEach((e) => console.log("from foreach" + e)); // to print the array content - display the content of the array as per our requirement(s)

//---------------------------------------EXAMPLE 9--------------------------------------------------
// print even numbers from the array
// a.forEach(e => {
//     if (e % 2 === 0) {
//         console.log(e);
// }
// }); 

//---------------------------------------EXAMPLE 10--------------------------------------------------
// // map is used to manipulate the content of the array
// let res = a.map((e) => e + 5);
// res.forEach((e) => console.log(e));

//---------------------------------------EXAMPLE 11--------------------------------------------------
// //filter is used to filter the content of the array
// a = a.filter(e =>e%2==0)
// a.forEach(e => console.log(e)); 

//---------------------------------------EXAMPLE 12--------------------------------------------------
// {
//  //let b = 20;
//  var b = 20;
//  console.log(b);
//  console.log(a);
  
// }
// // let will have a scope of block
// //var will have a global scope - it have an access to anywhere 
// console.log(b);

//---------------------------------------EXAMPLE 13--------------------------------------------------
// let n = [8,9,1,2,10,3,4,5,6,7]
// let b = n.sort((a,b) => b-a); // sort the array 
// console.log(b);

// // console.log ("3".charCodeAt(0));
// // console.log ("1".localeCompare("10"));

//---------------------------------------EXAMPLE 14--------------------------------------------------
// let y = ["zebra", "giraffe", "elephant", "hippo", "lion", "monkey", "tiger"];
// let b = y.sort((y,b) => b.localeCompare(y)); // sort the array 
// console.log(b);

//---------------------------------------EXAMPLE 15--------------------------------------------------
// let n = "Nouf, Ahmed, Al Hammadi";
// let result = n.split(", ");
// console.log(result);

// console.log(Array.isArray(n));


//---------------------------------------EXAMPLE 16--------------------------------------------------
//print prime numbers from the array (1)
//var n = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
// a = a.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });
// console.log(a);

//print prime numbers from the array (2)
// let count=0
// let i,j 
// for(j=2;j<=10;j++){

// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++ 
// }

// if(count==2)
// console.log(j)
// count=0 
// }

