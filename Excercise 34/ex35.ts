//Q34: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals : string[] = ["Dog", "Cat", "Goat"];

console.log("\nList of the animals:");

for(let animal of animals){
console.log(`${animal}`)
}

console.log("\nStatements about each animal:");

for(let animal of animals){
    if (animal === 'Dog' ){
        console.log(`A ${animal} is cute as a pet.`);
    } else if (animal === 'Cat'){
        console.log(`A ${animal} is very playful as a pet.`); 
    } else {
        console.log(`A ${animal} is beneficial as a pet.`)
    }
}
console.log("\nThings that are common among these animals:");

console.log("All these animals are great to be kept as a pet!");