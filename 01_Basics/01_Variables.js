const account_id = 34569
let accountEmail = "Shradha@gmail.com"
var accountPassword = "1234"
accountCity = "Hyderabad"
let accountState ; // will return undefined

//account_id = 45 // not allowed because it is const

//But we can change the var 
accountEmail = "hello@gmail.com"
accountPassword = "2234"
accountCity = "Chennai"

console.table([account_id, accountCity, accountEmail, accountPassword , accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
