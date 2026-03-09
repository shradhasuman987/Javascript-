// IIFE (Immediately Invoked Function Expressions)

(function some(){     //named iife
    console.log(`DB CONNECTED`);
})();   // semi-colon is imp in this func.

( () => {    //normal iife or arrow func iife
    console.log(`DB CONNECTED TWO`);
} )(); 