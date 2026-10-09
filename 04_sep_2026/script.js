//a --> arrow function
// bla --> arrow function
// blb --> return by arrow function
// 
// 
// 1)-- function without parameter

function greet(){
    console.log("hello all this is vishwanath")
}

greet()



//whenever we use the direct statement
// write a program to about you
// function aboutMe() {
//     console.log("My name is Vishwanath.");
//     console.log("I am 22 years old.");
//     console.log("I am a B.Tech graduate in Electronics and Communication Engineering.");
//     console.log("I graduated in May 2026.");
//     console.log("I am currently learning Python, SQL, and JavaScript.");
//     console.log("My goal is to build a successful career in the IT field.");
// }

// aboutMe();


// function add(a = 10, b = 20){
//     let c = a + b
//     console.log("The sum of a and b is: ", c)

// }
// add()

// function sub(a = 10, b = 20){
//     let c = a -  b 
//     console.log("THe difference of a and b is: ", c)
// }
// sub()

// function mul(a = Number(prompt("Enter a value: ")), b = Number(prompt("Enter the b value: "))){
//     let c = a * b
//     console.log(c, "this is multiplication")
// }
// mul()

// function div(a = Number(prompt("Enter the first value: ")), b = Number(prompt("Enter the second value: "))){
//     let c = a / b
//     console.log(c, "this is division.")

// }
// div()

// function mod(a = Number(prompt("Enter the a value: ")), b = Number(prompt("Enter the b value: "))){
//     let c = a % b
//     console.log("The modulus of the given numbers is: ", c)

// }
// mod()



function add(){
    let  a = 10; let b = 20; c = a + b;
    console.log(c)
}
add()

function con(){
    let a = "Vishu"; let b = "Boss"; let c = a.concat(b)
    console.log(c)

}
con()

//string methods
function lowercase(){
    let name = "vishwanath"
    console.log(name.toLowerCase())

}
lowercase()

function uppercase(){
    let name = "vishwanath"
    console.log(name.toUpperCase())

}
uppercase()


function len(){
    let name = "Vishwanath"
    console.log(name.length)

}
len()

function getcharacter(){
    let name = "Vishwanath"
    console.log(name.charAt("s"))
}
getcharacter()


function checkname(){
    let name = "vishwanath"
    console.log(name.includes("wan"))

}
checkname()

function checkstarts(){
    let name = "vishwanath"
    console.log(name.startsWith("vis"))

}
checkstarts()

function ends(){
    let name = "vishwanath"
    console.log(name.endsWith("nath"))

}
ends()

function getpart(){
    let name = "vishwanath"
    console.log(name.slice(0,4))

}
getpart()

function replaceName(){
    let name = " Hello Vishwanath"
    console.log(name.replace("Vishwanath", "student"))

}