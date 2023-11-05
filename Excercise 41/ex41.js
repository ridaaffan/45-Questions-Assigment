"use strict";
//Q41:Great Magicians: Start with a copy of your program from Exercise 40. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansNames);
