const name="Aditi"
const repoCount=50;

console.log(name + repoCount + " Value" );//Aditi50 Value ...(not recommended way to use )

// by using backticks(`) and string interpolation ..we inject values in the placeholders
console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`);  //we can perform many operations at the time like to change into upper case we can use {name.toUpperCase()}`
// Hello my name is Aditi  and my repo count is 50

const gameName=new String('Aditi-Singh-com')  //key-value pairs ..we paas the values inside the constructors 
//// Creates a String object instead of a primitive string.
console.log(gameName); //[String: 'Aditi-Singh-com']
console.log(gameName[0]); //A
console.log(gameName.__proto__); //{} we are getting the empty object but it has lots of value in it.. we aceess the prototype  __double dash before prototype
// __proto__ is a reference to an object's prototype. It is used to access the prototype object from which the current object inherits properties and methods.


// Properties and methods
console.log(gameName.length);  //15
console.log(gameName.toUpperCase());  // ADITI-SINGH-COM  to change into uppercase
console.log(gameName.toLowerCase()); //aditi-singh-com
console.log(gameName.charAt(2));// i  .. value at 2nd index 
console.log(gameName.indexOf('t')); //3  index of the string

// substring()
const newString=gameName.substring(0,4); //to print the substring 0r the part of the string ...we can't give negative values here 
console.log(newString); //Adit

//slicing() ....we can take negative values ..it will be started from reverse
const anotherString=gameName.slice(-10,-2); //-Singh-c
// Supports negative indexing.
// Negative index counts from the end of the string.
console.log(anotherString); 

// trim()   used to remove unwanted char from the string ..it works on new line char..at end or at start too
// // Removes whitespace from the beginning and end of a string.
const newStringOne="     Aditi     ";
console.log(newStringOne); //     Aditi     
console.log(newStringOne.trim()); // Aditi  ...here trimming from the both sides

// replace()
const url="https://aditi.com/aditi%20singh";
console.log(url.replace('%20','-')); //https://aditi.com/aditi-singh


// includes()   ...string includes the given keyword or not 
console.log(url.includes('aditi')); //true
console.log(url.includes('hello')); //false

// split()....changing the string into array on the basis of given char/symbol or separator
console.log(gameName.split('-')); //[ 'Aditi', 'Singh', 'com' ]



