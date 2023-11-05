//Q26: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//1st Version

console.log("\nFirst version of code where alien color is Green:")

let alien_color: string = "Green";

if(alien_color === 'Green'){
    console.log("Congrats! you just earned 5 points for shooting the alien.")
} 
else if(alien_color === 'Yellow'){
    console.log("Congrats! you just earned 10 points for shooting the alien.")
} 
else if(alien_color === 'Blue'){
    console.log("Congrats! you just earned 15 points for shooting the alien.")
} 

//2nd Version
console.log("\nSecond version of code where alien color is Yellow:")

alien_color= "Yellow";

if(alien_color === 'Green'){
    console.log("Congrats! you just earned 5 points for shooting the alien.")
} 
else if(alien_color === 'Yellow'){
    console.log("Congrats! you just earned 10 points for shooting the alien.")
} 
else if(alien_color === 'Blue'){
    console.log("Congrats! you just earned 15 points for shooting the alien.")
} 

//3rd Version
console.log("\nThird version of code where alien color is Blue:")

alien_color= "Blue";

if(alien_color === 'Green'){
    console.log("Congrats! you just earned 5 points for shooting the alien.")
} 
else if(alien_color === 'Yellow'){
    console.log("Congrats! you just earned 10 points for shooting the alien.")
} 
else if(alien_color === 'Blue'){
    console.log("Congrats! you just earned 15 points for shooting the alien.")
} 
