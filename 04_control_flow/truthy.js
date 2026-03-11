const userEmail = "shradha@email"

if(userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user Email");
}

/* falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
"0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
} */ 