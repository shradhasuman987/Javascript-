const account_id = 34567
let accountEmail = "Shradha@gmail.com"
var accountPassword = "1234"
accountCity = "Hyderabad"
let accountState ; // will return undefined

//account_id = 45 // not allowed because it is const

//But we can change the var 
accountEmail = "hello@gmail.com"
accountPassword = "234"
accountCity = "chennai"

console.table([account_id, accountCity, accountEmail, accountPassword , accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/