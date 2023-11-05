//Q25: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color: string = "Green";

//1st Version
console.log("First version of code");

if(alien_color === 'Green'){
    console.log("Congrats! you just earned 5 points for shooting the alien.")
} else{
    console.log("Congrats! you just earned 10 points for shooting the alien.")
}

//2nd Version
console.log("\nSecond version of code");

alien_color = 'Blue';

if(alien_color === 'Green'){
    console.log("Congrats! you just earned 5 points for shooting the alien.")
 } else{
    console.log("Congrats! you just earned 10 points for shooting the alien.")
 }