"use strict";
//Q21:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let guestList = ["Aiman", "Arfa", "Eraj"];
//STEP # 1: Produce an index error.
let invalidIndex = 3;
console.log(`Name at index ${invalidIndex}:`, guestList[invalidIndex]);
//STEP # 2:Correct the error.
for (let i of guestList) {
    console.log(i);
}
