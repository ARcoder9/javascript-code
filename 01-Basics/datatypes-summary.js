// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// Reference (Non - Primitive)

// Array , Objects, Functions

/* 
JavaScript is a dynamically typed language. 
This means that the type of a variable is determined at runtime, not at compile time. 
You don't need to explicitly declare the type of a variable when you create it. 
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack , Heap

// primitive datatypes uses stack memory
// non - primitive datatypes uses heap memory

let myName = "Ayush"
let anotherName = myName
anotherName = "Ranjan"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user1@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email)
console.log(userTwo.email)