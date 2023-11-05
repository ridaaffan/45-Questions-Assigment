"use strict";
//Q36: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const make_shirt = (size = "Large", text = "I love Typesript!") => {
    console.log(`Size of the Shirt: ${size}, Text message printed on the Shirt: ${text}`);
};
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Typescript is fun!");
