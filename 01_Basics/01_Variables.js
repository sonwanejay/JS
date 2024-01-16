const accountId = 123456
let accountEmail = "jsonwane155h@gmail.com"
var accountPassword = "1609"
accountCity = "Pune"

 
// accountId = 2 // Not Allowed

accountEmail = "ajdu@ds.com"
accountPassword = "323323"
accountCity = "ABad"

console.log(accountId); 
/*
Prefer not to Use var
Because of issue in block scope and function scope
*/
console.log([accountId,accountEmail,accountPassword,accountCity])