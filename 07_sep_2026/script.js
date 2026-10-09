//assignment operators

// function add_eq(a, b) {
//   let x = (a += b);
//   console.log(x);
// }
// add_eq(10, 5);

// function sub_eq(a, b) {
//   let x = (a -= b);
//   console.log(x);
// }
// sub_eq(10, 5);

// function full_name(a = "vishwanath", b = "mudagall") {
//   let x = a.concat(b);
//   console.log(x);
// }
// full_name("mrunal", "thakur"); //overloading

// function a() {
//   let x = 1;
//   console.log(x);
// }
// a();

// function a() {
//   let x = 1;
//   function b() {
//     let z = 2;
//     function c() {
//       let y = 3;
//     }
//     c();
//     console.log(x);
//     console.log(y);
//     console.log(z);
//   }
// }
// 


// function first_name(){
//     let a = "Vishwanath"
//     return(a)


// }
// first_name()

// function last_name(){
//     let b = "Mudagall"
//     return(b)


// }
// last_name()

// function full_name(){

// }
// console.log(`hello all my full nam eis ${a}${b}`)


// function a(){
//     let x = 10
//     return(x)
// }
// console.log(a())

// function b(){
//     let y = 20
//     return(y)
// }
// console.log(b())

// function add(){
//     let c = a + b
//     console.log(c)

//     return(c)

// }
// console.log(c())


//write a program to write your full name, first name will be the first functon, second name should be second function and third funciton will full name
// 
// 

// function first_name(){
//     let a = "vishwanath"
//     return(a)

// }
// console.log(first_name())

// function last_name(){
//     let b = "Mudagall"
//     return(b)

// }
// console.log(last_name())


// function no(){
//     let a = 10
//     let b = 20
//     return(a)
//     return(b)


// }

// let x = no()
// console.log(x)


// function greet(){
//     console.log("hello, this is vishwanath")

// }
// greet()

//let greet = () =>  --> this is the type of assigning the variable
let greet = () => {
    console.log("hello all this is vishwanath")

}
greet()


//write a program to write about yourself inside the arrow function

let aboutMe = () => {
    console.log("hello, this is vishwanath");
    console.log("i completed my graduation in electronics and Communication Engineering");

}
aboutMe()


//normal functon hosting is possible and narrow  function hosting is not possible before initialisation
// 


//Narrow function --> redeclaration of function name is not possible 
// 


let name  = (a = "vishwanath", b = "Mudagall") => {
    let x = a.concat(b)
    return(x)

}

let y = names("mrunal", "thakur")
console.log(y.toUpperCase)









