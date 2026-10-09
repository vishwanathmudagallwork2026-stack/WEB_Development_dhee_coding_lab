//conditional statements

// let a = true
// if(!a){
//     console.log("IT is true")
// }
// else{
//     console.log("IT is false")
// }

//write a program to check the user is eligible to vote or not
// 
let age = Number(prompt("Enter the age: "))

if (age >= 18){
    console.log("The user is eligible to vote.")
}
else{
    console.log("the user is not eligible to vote.")
}

//write a program to check the user can drive or not

let age1 = Number(prompt("Enter the age1: "))

if (age1 >= 18){
    console.log("The user is eligible to drive.")
}
else{
    console.log("The user is not eligible to drive.")
}


//write a program to check whether the user is string or not 

let user = prompt("Enter a string: ")

if (typeof user === "string"){
    console.log("the given user is string")
}
else{
    console.log("The given user is not string.")
}


//write a program to check the time is evening or good morning
let hour = Number(prompt("Enter the hour(0 to 23): "))

if (hour < 12){
    console.log("Good Morning")
}
else{
    console.log("Good Evening")
}


// write a program to check the time is in am or pm
// 
// write a program to check whether the given input of user is even or odd number
let num = Number(prompt("Enter the number: "))

if (num %2 == 0){
    console.log("the number is even")
}
else{
    console.log("the number is odd")
}
// 
// write a program to check whetherr the given input of number is divisible by 3
let num1 = Number(prompt("Enter the number: "))
if (num1 % 3 == 0){
    console.log("The number is divisible by 3")
}
else{
    console.log("The number is not divisible by 3")
}


// write a program to check the given input of the user is divisible by  3, and 5
let num2 = Number(prompt("enter the number: "))

if (num3 % 3 === 0 && num3 % 5 === 0){
    console.log("The number is divisible by 3 and 5")
}
else{
    console.log("the number is not divisible by 3 and 5")
}

// 
//write a program to check the given input of is zero or not
let n = Number(prompt("Enter the number: "))

if (n === 0){
    console.log("the number is zero")
}
else{
    console.log("the number is not zero")
}


// if (condition){
//  logic
// }
// else if (condition){
// logic
// }
// else{
// default
// }


