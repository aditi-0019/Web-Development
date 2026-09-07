let score="33 abc"

console.log(typeof score);  //string
console.log(typeof (score)); //string

let valueInNumber=Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN  as 33abc cannot be converted into a  complete number

let score2=true;
console.log(typeof score2); //boolean

let score3=null;
let valinnum=Number(score3);
console.log(typeof valinnum); //number
console.log(valinnum); //0
 let score4=undefined; 
 let value=Number(score4); 
 console.log(typeof value); //number
 console.log(value); //Nan
   

//  "33" =>33
//"33abc" =>NaN (not a number) but type is number 
// true=>1 ;false =>0 
// 1 =>true ,0=>false 
// ""=>false
// "aditi"=>true 


