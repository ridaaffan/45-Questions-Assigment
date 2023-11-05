"use strict";
//Q18:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Aiman", "Arfa", "Eraj"];
let guestNotComing = "Eraj";
console.log(`${guestNotComing} can't make it to the dinner!`);
guestList.splice(2, 1, "Mahvish");
console.log("New List:", guestList);
console.log("Second set of invitations:");
guestList.forEach((guestName) => {
    console.log(`Hello ${guestName}, I'd like to invite you for a dinner!`);
});
console.log("\nPrinting message indicating number of guests");
console.log(`We've invited ${guestList.length} guests in Excercise 14`);
