//Q23: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


//Tests for equality and inequality with strings

let myName1: string = "Rida";
let myName2: string = "rida";

console.log(myName1 === myName2) //false
console.log(myName1 !== myName2) //true

//Tests using the lower case function

let color1: string = "green";
let color2: string = "GREEN";

console.log(color2.toLowerCase() === color1) //true
console.log(color1.toLowerCase() === color2) //false

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1: number = 50;
let num2: number = 60;

console.log(num1 === num2)//false
console.log(num1 !== num2)//true
console.log(num1 > num2)//false
console.log(num1 < num2)//true
console.log(num1 <= num2)//true
console.log(num1 >= num2)//false

//Tests using "and" and "or" operators

let a:number = 10;
let b:number = 20;
let c:number = 30;

console.log(a<b && b<c);//both conditions true so true
console.log(a<b && b>c);//one conditions true one false so false 
console.log(a<b || b>c);//one conditions true one false but true
console.log(a>b || b>c)//both conditions false so false

//Test whether an item is in a array

let guestList:Array<string> = ["Aiman", "Arfa", "Eraj"];

console.log(guestList.includes('Eraj')); // true
console.log(guestList.includes('Fatima')); //false

//Test whether an item is not in a array

console.log(!guestList.includes('Eraj')); // false
console.log(!guestList.includes('Fatima')); //true