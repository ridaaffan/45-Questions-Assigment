//Q17: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

let favLocations: Array<string> = ["Saudia Arab", "Paris", "Bali", "Maldives"];

//STEP # 1: Print your array in its original order.

console.log("\nOriginal Order:", favLocations);

//STEP # 2: Print your array in alphabetical order without modifying the actual list.

console.log("\nAlphabetical Order:" , [...favLocations].sort())

//STEP # 3: Show that your array is still in its original order by printing it.

console.log("\nShowing that the array is still in its original form:", favLocations)

//STEP # 4: Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\nReverse alphabetical Order:" , [...favLocations].sort().reverse())

//STEP # 5: Show that your array is still in its original order by printing it again.

console.log("\nShowing that the array is still in its original form:", favLocations)

//STEP # 6: Reverse the order of your list. Print the array to show that its order has changed.

favLocations.reverse()
console.log("\nShowing that the array has been changed from its original form:", favLocations)

//STEP # 7:Reverse the order of your list again. Print the list to show it’s back to its original order.

favLocations.reverse()
console.log("\nShowing that the array is back to its original form:", favLocations)

//STEP # 8: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

favLocations.sort()
console.log("\nThe order of the array has been changed to alphabetical order:" , favLocations)

//STEP # 9: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

favLocations.sort().reverse()
console.log("\nThe order of the array has been changed to reverse alphabetical order:" ,favLocations )