const accountId= 123455
let accountName="Subhadip"
var accountEmail="subhadip@gmail.com"
accountCtiy="Kharagapur"

// accountId=23456 //Const can't be changed
accountEmail ="subhadippatra@gmail.com"
accountName="Subhadip Patra"
accountCtiy="C.K Road"

// as we should'nt use var 
let accountState; // Gives output as undefined 


//Don't use var as this creates some issue with scope and function block

console.table([accountEmail,accountId,accountName,accountCtiy,accountState])