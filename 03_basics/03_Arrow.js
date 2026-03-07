const user = {
    username: "shradha",
    price: 899,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "suman"
// user.welcomeMessage()

//console.log(this)   // output empty "{}"

// function one(){
//     let username = "shradha"
//     console.log(this.username); //undefined
// }

// one()

// const one = function() {
//     let username = "shradha"
//     console.log(this.username); //undefined
// }

// one()

const one = () => {
    let username = "shradha"
    //console.log(this.username); //undefined
    console.log(this); //output empty "{}"
}

// one()

//___________BASIC ARROW FUNCTION______

// const addTwo  = (num1 , num2) => {
//     return num1 + num2
// }

//_________ARROW FUNCTION ANOTHER METHODS________

// const addTwo  = (num1 , num2) =>  num1 + num2
//const addTwo  = (num1 , num2) =>  (num1 + num2)

//const addTwo  = (num1 , num2) =>  {username: "shradha"} // undefined beacause object have to be declared in paranthesis

const addTwo  = (num1 , num2) =>  ({username: "shradha"}) // value will come 


console.log(addTwo(3,4))


    
