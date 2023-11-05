"use strict";
//Q20:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let maxiDresses = [];
let maxiDress1 = {
    name: "Elara",
    price: 2500,
    fabric: "Chiffon"
};
maxiDresses.push(maxiDress1);
let maxiDress2 = {
    name: "Cindrella",
    price: 2500,
    fabric: "Silk"
};
maxiDresses.push(maxiDress2);
let maxiDress3 = {
    name: "Rose",
    price: 2500,
    fabric: "Linen"
};
maxiDresses.push(maxiDress3);
//Making a function to display objects
function displayMaxiDresses(maxiDresses) {
    for (let i of maxiDresses) {
        console.log(`
        Name: ${i.name}
        Price: ${i.price}
        Fabric: ${i.fabric}`);
    }
}
displayMaxiDresses(maxiDresses);
