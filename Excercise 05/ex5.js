"use strict";
//Q5: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name1 = "\t    Rida Affan \n";
console.log("Name with whitespaces:", name1);
let strippedName = name1.trim();
console.log("Stripped Name:", strippedName);
