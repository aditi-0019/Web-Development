//TYPESCRIPT DOESN'T ALLOW THE COMPARISON BETWEEN TWO DIFFERENT DATA TYPES
console.log(2>1);  //true 
console.log(2>=1); //true
console.log(2<1);//false
console.log(2==1); //false
console.log(2!=1) ; //true




//CONVERSION BETWEEN TWO DIFFERENT DATA TYPES 
console.log("2">1 ); //true here automatic conversion has taken place 
console.log("02">1 ) ; //true here also  the automatic conversion 
// null is an empty value
console.log(null>0);  //false
console.log(null==0); //false 
console.log(null>=0); //true
  /* The reason is that an eqality check == and comaprisons > < >= <= work differently'
   Comparisons convert null to a number,treating it as 0.
   That's why null>=0 is true but null>0 is false  */
console.log(undefined==0);  //false 
console.log(undefined>0);   //false
console.log(undefined <0);  //false   
// Avoid Null and undefined conversion as much as u can 
//BASICS
//  ===: STRICT CHECK ..here the value as well as the data types gets checked 
console.log("2"===2); //false