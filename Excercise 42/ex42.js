"use strict";
//Q42: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicians = ["Harmione Granger", "Harry Potter", "David Copperfield"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(i) {
    const greatMagicians = i.map(magicians => `The Great ${magicians}`);
    return greatMagicians;
}
const greatMagiciansNames = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansNames);
