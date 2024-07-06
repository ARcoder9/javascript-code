const accountId = 144453
let accountEmail = "ayush.ranjan901@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ayush.ranjan9111@gmail.com"
accountPass = "121212"
accountCity = "Bengaluru"

console.log(accountId)

/* 
   prefer not to use " Var " because of issue in block scope and functional scope
*/

console.table([accountId,accountPass,accountCity,accountEmail,accountState])

