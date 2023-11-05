// Q14: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList:Array<string> = ["Aiman", "Arfa", "Eraj"];

let guestNotComing:string = "Eraj";

console.log(`${guestNotComing} can't make it to the dinner!`);

guestList.splice(2,1, "Mahvish");

console.log("New List:" ,guestList);

console.log("Second set of invitations:");

guestList.forEach((guestName) => {
    console.log(`Hello ${guestName}, I'd like to invite you for a dinner!`)
    })
