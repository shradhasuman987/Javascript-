function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("shradha"))
//console.log(loginUserMessage())

function calculateCartPrice(val1 , val2, ...num1){ //... is called rest and spread operator
    return num1
}

//console.log(calculateCartPrice(200, 400, 600))

const user = {
    username: "shradha" ,
    price: 199
}

function handleObject(anyobject){
    console.log(`username id ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

//____passing object directly

handleObject({
    username: "sam",
    price: 999
})

//_____passing array

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400 , 500 , 1000]));

