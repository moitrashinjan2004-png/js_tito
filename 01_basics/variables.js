const accountId = 220104
let accountEmail = "shinjan@gmail.com"
var accountPassword = "2004"
accountCity = "Kolkata"
let accountState //undefined

/*
use let
var -> issue in vlock scope and functional scope
*/

// accountId = 2 //not allowed
accountEmail = "moitra@gmail.com"
accountPassword = "2201"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);