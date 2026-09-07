// PRIMITIVE DATA TYPES 

// 7 types: String,Number, Boolean, Null, undefined ,Symbol ,BigInt

const score=100
const scoreValue=100.3 //here both the values are considered as numbers here there's no concept of float double

const isLoggedIn= false
const outsideTemp= null
let userEmail;   //here undefined 

const Id=Symbol('123')
const anotherId=Symbol('123')  //here the values of both id and another id would be different c
// symbol will return them different unique values here
console.log(Id===anotherId);  //false
// const bigNumber=344562245666983321573958n

// NON-PRIMITIVE (REFERENCE) DATA TYPES (reference of memory is allocated )
// Arrays ,Objects ,Functions
//array 
const heros=["Shaktiman","Alphabet","Excel"]

// object  ....key value pairs 
let myObj={
    name:"Aditi",
    age:20,
}

const myFunction=function(){
    console.log("Hello World");
} 

console.log(typeof bigNumber);  //undefined when we comment out the bignumber 
console.log(typeof outsideTemp);  //object   (null ka typeof object hi aataa h we can follow ECMA SCRIPT for the further knowledge )
console.log(typeof scoreValue) ; //number
console.log(typeof myFunction);  //function (or we can say function object or object function)
console.log(typeof anotherId);  //symbol 





// +++++++++++++++++++++++++++++++++++++++++
// MEMORY 

//Stack(Primitive) , Heap (Non-primitive) 
// In stack we get the copies of the values whereas in stack we get the reference of the values  


let myYoutubename="aditisinghdotcom"
 let anothername=myYoutubename 
 anothername="learnjavascript"
 console.log(myYoutubename) ; //aditisinghdotcom
console.log(anothername);    //learnjavascript  cozz here original value of myYoutube name was  not assigned whereas its copy was assigned ,and we can further make changes in the copy 


let userOne={
    email: "user@google.com" ,
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="aditi@google.com"
console.log(userOne.email);  //aditi@google.com  (here theres the changed in the referece as both have the same reference  so the original value gets changed here too ...they are stored in heap )
console.log(userTwo.email);  //aditi@google.com
