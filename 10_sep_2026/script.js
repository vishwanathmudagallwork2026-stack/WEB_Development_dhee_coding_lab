// //using functions
// let user = Number(prompt("Enter the age: "))
// if (user >= 18){
//     console.log("eligible to vote.")
//     let gender = prompt("Enter gender: ").toLowerCase()
//     if (gender === "male" || gender === "m"){
//         console.log("stand in male line.")

const { useLayoutEffect } = require("react")

//     }
//     else if (gender === "female" || gender === "f"){
//         console.log("stand in female line.")
//     }

//     else if (gender === "others" || gender === "o"){
//         console.log("stand in others line.")
//     }
//     else {
//         console.log("Enter the valid gender: ")
//     }
// }


// //write the program to check the user is eligible to vote or not and maximum age of the person is 
// // 
// // 
// // 
// let age = Number(prompt("Enter the age: "))
// if (age >= 18 && age <= 100){
//     console.log("The user is eligible to vote")
// } 
// else {
//     console.log("Not eligible to vote")
// }


// //write a program to check the whether the student has obtained distinction in the all the subjects - kannada, hindi, english, maths, social science
// // 




// let marks = () =>{
//     let x = Number(prompt(`enter ${a} marks : `))
// }

// let kannada = marks("kannada")
// let hindi = marks("hindi")
// let english = marks("english")
// let maths = marks("maths")
// let social = marks("social")

// if (isNaN(kannada) || isNaN(hindi) || isNaN(english) || isNaN(maths) || isNaN(social) || kannada > 100 || english > 100 || maths > 100 || )




// ///write a program to calculate the total current for the huge electric current. for the unit is 


let units = Number(prompt("Enter units: "))
if (isNaN(units) || units < 0){
    alert("Invalid units: ")
}
else{
    if(units >= 400){
        amount = amount + ((units - 400)*10)
        units = 400
    }
    if(units >= 200){
        amount += (units - 200) * 8
        units = 200
    }
    if (units >= 100){
        amount += (units - 100) * 6
        units = 100
    }
    if (units > 0){
        amount += (units - 0) * 4
        
    }
}


