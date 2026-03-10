/* If statement

if(true){    //will execute

}

if(false){   //will not execute
  
} */

// <, >, <=, >=, ==, !=, ===, !==

/* if(2 === 2){
    console.log("Executed");
} */

/* const temp = 23
if( temp <50){
    console.log("Executed")
} */

/* const temp = 78
if(temp === 50){
    console.log("equal to 50")
}else{
    console.log("greater than 50")
} */

/* const score = 200
if(score >100){
    const power = "fly"
    //var power = "fly"   // Don't give syntax error
    console.log(`User power: ${power}`); //will execute
}
console.log(`User power: ${power}`); //syntax error near unexpected token ``User power: ${power}`'
 */

/* const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

} */

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In ");  
}

