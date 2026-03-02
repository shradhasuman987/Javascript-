const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUSer = {
    email : "another@gmail.com" ,
    fullname : {
        userfullname : {
            firstname: "Shradha" ,
            lastname: "Suman"
        }
    }
}

//console.log(regularUSer.fullname);
//console.log(regularUSer.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //all keys will become stored in array so we put loop on that or can use for many another uses.
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));