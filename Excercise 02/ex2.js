"use strict";
//Q2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "rida affan";
//LOWERCASE
console.log(personName.toLowerCase());
//UPPERCASE
console.log(personName.toUpperCase());
//TITLECASE
let words = personName.split(" ");
let titleCase = "";
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCase);
