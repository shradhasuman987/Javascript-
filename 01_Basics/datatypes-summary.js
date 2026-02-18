//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "hulk" , "naruto"];
let myObj = {
    name: "shradha",
    age: 22,
    address: "Hyderabad" ,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof bigNumber); // typeof func is used to identify the DT of var


//-------------------------Stack and Heap Lecture---------------------

// Stack (used in primitive type)(stack provide copied values) , Heap (used in Non-primitive type)(Heap provide referance[original]value.)

let myname = "shradha"

let anothername = myname
anothername = "suman"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "shradha@gmail.com" ,
    upi: "shradha@ybl"
}

let userTwo = userOne

userTwo.email = "shradha@google.com"

console.log(userOne);
console.log(userTwo);