                                   // JSON Object: JavaScript Object Notation
                                // it is of key value pair format ; 'key' : 'value'
                                // SAMPLE: {'name' : 'John', 'age' : 25, 'location' : 'pune'}

//---------------------------------------EXAMPLE 1--------------------------------------------------
// let personObj = {
//     name : 'Nouf',
//     age : 25,
//     gender: "female",
//     location: "AbuDhabi"
// }; 

// console.log(personObj);

// //will add the contact number to the list
// personObj.contactNumber = "1234567890";
// console.log(personObj);

// // retrieve a specific attribute 
// console.log(personObj.name);

// //extracting the keys only 
// let keys = Object.keys(personObj);
// console.log(keys);

// //extracting the values only
// let values = Object.values(personObj);
// console.log(values);

// to retrieve both the keys and the values - using forin loop
// for (const key in personObj) {
    
//         const value = personObj[key];
//         console.log ("key : " + key + " value : " + value);    
// }



//---------------------------------------EXAMPLE 2--------------------------------------------------

let personObj = [
   { name : 'Nouf',
    age : 25,
    gender: "female",
    location: "AbuDhabi",
    jobTitle: "Analyst"
   },
   
   { name : 'Waad',
    age : 23,
    gender: "female",
    location: "AbuDhabi"
   },
]; // array of json objects


// for (const key in personObj) {
    
//     const value = personObj[key];
//     console.log ("key : " + key + " value : " + JSON.stringify(value));    

//     for (const ikey in value) {
        
//         const element = value[ikey];
//         console.log("iKey " + ikey + " value " + element);
            
        
//     }
// }


// //printing names only 
// for (const key in personObj) {
    
//     const value = personObj[key];
//     console.log ("key : " + key + " value : " + JSON.stringify(value));    

//     for (const ikey in value) {
//       if (ikey === "name") {

        
//         const element = value[ikey];
//         console.log("iKey " + ikey + " value " + element);
            
        
//     }
// }}

//filtering the names only
personObj.forEach((e) => console.log(e));
let result = personObj.map((e) => e.name);
console.log(result);