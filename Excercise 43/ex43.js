"use strict";
//Q43: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("\nSummary of the Sandwich:");
    if (items.length === 0) {
        console.log("Please add some items.");
    }
    else {
        items.forEach((item) => {
            console.log(`${item}`);
        });
    }
}
make_sandwich("Cucumber", "Jalapeno", "Lettuce");
make_sandwich("Jalapeno", "Pickle", "Chicken", "Tomato");
make_sandwich();
make_sandwich("Cheese", "Sausage", "Lettuce");
