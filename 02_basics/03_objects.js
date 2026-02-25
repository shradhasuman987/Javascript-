// singleton
//object.create

//objecct literals

const mySym = Symbol("key1")

const JsUSer = {
    name: "Shradha",
    "full name" : "shradha suman" ,//can not access by .(dot)//
    [mySym]: "mykey1" , 
    age: 18,
    location: "Hyderabad",
    email: "shradha@google.com",
    isLoggedIn: false ,
    lastLoginDays: ["monday" , "Saturday"]
}

//console.log(JsUSer.email)
//console.log(JsUSer["email"])
//console.log(JsUSer["full name"])
//console.log(JsUSer[mySym])

JsUSer.email = "shradha@gmail.com"
//Object.freeze(JsUSer)
JsUSer.email = "shradha@yahoo.com"
//console.log(JsUSer);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());