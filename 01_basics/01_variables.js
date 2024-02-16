const accountId = 144553
let accountEmail = "akon@akon.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2 // not allowed

accountEmail = "akon@y.com"
accountPassword = "1212121"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);