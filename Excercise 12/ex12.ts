//Q12:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteTransport: Array<[transport:string, brand:string]> = []

favouriteTransport.push(["Car", "Toyota"]);

favouriteTransport.push(["Motorcycle", "Honda"]);

favouriteTransport.push(["Bicycle", "Sohrab"]);

favouriteTransport.forEach(([transport,brand]) =>
{console.log(`I'd like to own a ${brand} ${transport}.`)
})