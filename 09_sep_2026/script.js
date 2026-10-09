//write a program 
//write a program of the student who has taken the marks 




//user is eligible to 

//write a program whether the user is selected the balance
// , withdraw or deposit
// write a program to check the 
// 
// write a program to calculate the total amount after discount -- 5000> 5% . 6000 > 6%, 7000 > 7%, 8000 >8%, 9000 > 9%, 10000 > 10% 
//total purchase amount
// discount
// total after discount


//1)
// let marks = Number(prompt("Enter the marks: "))

// if (marks > 90){
//     console.log("You obtained O grade")
// }
// else if (marks > 80){
//     console.log("You obtained A grade")
// }
// else if (marks > 70){
//     console.log("You obtained B grade")
// }
// else if (marks > 60){
//     console.log("You obtained the c grade")
// }
// else if (marks > 50){
//     console.log("You obtained the D grade")
// }
// else if (marks > 40){
//     console.log("YOu obtained the E grade")
// }
// else {
//     console.log("YOu are failed")
// }


//2)
balance = Number(prompt("Enter the balance: "))
amount = Number(prompt("Enter the amount: "))

if (amount < 0){
    console.log("The amount is invalid")
}

else if (amount > balance){
    console.log("The Insufficient amount")
}

else {
    balance = balance - amount
    console.log("The withdrawl successful")
    console.log("The withdrawl amount", amount)
    console.log("The remaining amount", amount)
}

//1)
let user = prompt("Enter gender: ")
if (user === "male" || user === "m"){
    console.log("male")
}
else if (user === "female" || user === "f"){
    console.log("female")
}
else if (user === "other" || user === "o"){
    console.log("others")
}
else {
    alert("Invalid")
}


//2)

let inp = (i) => {

}

let student = inp("marks")
if (student > 100 || student < 0){
    alert("Invalid input")
}

else if (student >= 90){
    console.log("O")
}
else if (student >= 80){
    console.log("A")
}
else if (student >= 70){
    console.log("B")
}
else if (student >= 60){
    console.log("C")
}
else if (student >= 50){
    console.log("D")
}

else{
    console.log("failed")
}

//3)
// 
let inp1 = (i) => {
    let user = prompt(`Enter t`)

}


//larget of three numbers


let a = inp("a")
let b = inp("b")
let c = inp("c")

if (a > b && a > c){
    console.log("a is greater than b and c.")

}
else if (c > a && c > b){
    console.log("b is greater than a and c")

}

else if ( a ===b && a === c && b === c){
    console.log("All are equal")
}

//4
let amount = Number(prompt("enter the amount: "))
console.log("total amount = ", amount)

let discount = 0

if (amount >= 10000){
    discount = 10
}
else if (amount >= 9000){
    discount = 9
}

else if (amount >= 8000){
    discount = 8
}
else if (amount >= 7000){
    discount = 7
}
else if (amount >= 6000){
    discount = 6
}
else if (amount >= 5000){
    discount = 5
}

else{
    console.log("Invalid input")
}

let after_dis = amount - ((amount / 100)*discount)



/