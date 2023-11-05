"use strict";
//Q28: Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["mango", "grapes", "peach"];
if (favorite_fruits.includes("mango")) {
    console.log("I love mangoes");
}
if (favorite_fruits.includes("grapes")) {
    console.log("I love grapes");
}
if (favorite_fruits.includes("peach")) {
    console.log("I love peaches");
}
if (favorite_fruits.includes("banana")) {
    console.log("I don't like bananas but they're healthy");
}
if (favorite_fruits.includes("papaya")) {
    console.log("Papayas are so goey");
}
