// ===== CONDITIONALS =====
// Definition: perform different operations based on the given condition

// Task: Define whether a number is positive or negative
// let integer = 1

// // inside the partenthesis in an if statement, we write a logical statement checking whether its true or false

// if(integer < 0) {
//     // inside curly brackets is our codeblock that runs IF  we meet our condition
//     console.log("Negative: " + integer)
// } else {
//     // if we didnt meet our logical statement, else codeblock will execute
//     console.log("Positive: " + integer)
// }

// Task: Setting up a security web site that grants users over the age of 18+ acces to the site.
// Write a conditional that gives users who are 18+ access and logs access denied for users who do not meet conditions

// let age = 19

// if(age >= 18) {
//     console.log("Access Granted")
// } else {
//     console.log("Access Denied")
// }

// Task:
/*
    Nested if/else statement
    Declare a variable called num
    Add an if'else statement that checks if num is positive & greater than 100
    Add another statement to check if num is positive but less than 100
    Add a final statement to check if num is negative
*/

// let num = 100;

// if(num>0 && num>100) {
//     console.log(num + " is positive and greater than 100.")                     
// } else if(num>100 && num<100) {
//     console.log(num + " is positive but less than 100.")
// } else if(num<0) {
//         console.log(num + " is negative.")
// }  else {
//     if(num === 100) {
//         console.log("WE GOT A HUNDRED")
//     }
// }

// let grade = 60

// if(grade >= 90) {
//     console.log("A")
// } else if(grade>= 80){
//     console.log("B")
// } else if(grade >= 70) {
//     console.log("C")
// }  else if(grade >= 55) {
//     console.log("D")
// } else {
//     console.log("F")
// }
    


// ===== LOOPS =====

// TASK: loop that iterates from 0 to 9
// // statement 1: declare out iterator
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// // Task: loop from 10 to 1
// for(let i=10; i>0; i--) {
//     console.log(i)


// // Task: write a loop that outputs 1,3,5,7,9
// for(let i = 1; i < 10; i+=2) {
//     console.log(i)
// }

// Task: write a loop that outputs 2,4,6,8,10

// for(let i=2; i < 11; i+=2) {
//     console.log(i)
// }

// ===== REMAINDER OPERATOR =====

// Remainder operator (also known as modulo) returns the remainder leftover when one operand is divided by a second operand. It always takes the sign of the dividend.

// Dividend meaning %

console.log("REMAINDERS")
console.log( 4 % 3) //1
console.log(20 % 2)//0
console.log(20 % 9)//2

//use cases
// Find out whether something is divisible by 2 means even number
// An even number is always going to have a remainder of 0
// An odd number is always going to have a remainder of 1

// 24 => true
console.log(24 % 2 === 0)

// 35 => false
console.log(35%2 === 0)