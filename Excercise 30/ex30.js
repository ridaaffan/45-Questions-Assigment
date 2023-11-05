"use strict";
//Q30:No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ['admin', 'Rida Affan', 'Areeba Farrukh', 'Ayesha Farrukh'];
function greetUsers(userNames) {
    if (userNames.length == 0) {
        console.log('We need to find some users!');
    }
    for (let username of userNames) {
        if (username === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log('\nFor non-empty usernames:\n');
greetUsers(userNames);
userNames = [];
console.log('\nFor empty usernames:');
greetUsers(userNames);
