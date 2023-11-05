"use strict";
//Q15: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Aiman", "Arfa", "Eraj"];
//STEP # 1: Informing people that you found a bigger dinner table.
guestList.forEach((guestName) => {
    console.log(`Hello ${guestName}, guess what? I just found a bigger dinner table!`);
});
//STEP # 2: Add one new guest to the beginning of your array.
guestList.unshift("Mahvish");
//STEP # 3: Add one new guest to the middle of your array.
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Fatima");
//STEP # 4: Use append() to add one new guest to the end of your list.
guestList.push("Javeria");
console.log("New List:", guestList);
//STEP # 5: Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitations:");
guestList.forEach((guestName) => {
    console.log(`Hello ${guestName}, I'd like to invite you for a dinner!`);
});
