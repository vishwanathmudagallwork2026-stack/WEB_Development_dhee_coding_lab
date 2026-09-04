let vishu = {
  first_name: "vishwanath",
  last_name: "Mudagall",
  ph_no: 9916401078,
  company: "World Technologies",
  age: 22,
};

// console.log(vishu)
// console.log(`name : ${vishu.first_name}${vishu.last_name}`)
// console.log(`phone no : ${vishu.ph_no}`)
//
let { first_name, last_name, ph_no } = vishu;

console.log(first_name, last_name);

//Destructuring introduced in es6 version
// Destructuring is used to acess the properties of the object of an object easily.
// destructuring can be done for single object.
// it is for developer usage.
// Example:-

// let employees = [
//   {
//     name: "vishwanath",
//     phone_no: "9876543210",
//     empid: "EMP001",
//     employee_designation: "Software Developer",
//   },
//   {
//     name: "Priya",
//     phone_no: "9876543211",
//     empid: "EMP002",
//     employee_designation: "UI/UX Designer",
//   },
//   {
//     name: "Arjun",
//     phone_no: "9876543212",
//     empid: "EMP003",
//     employee_designation: "Project Manager",
//   },
// ]

// employees.forEach(({ name, phone_no, empid, employee_designation }) => {
//   console.log("Name:", name);
//   console.log("Phone:", phone_no);
//   console.log("Employee ID:", empid);
//   console.log("Designation:", employee_designation);
//   console.log("----------------------");
// });


// let arr = ["apple", "mango", "banana"]
// console.log([...arr,"ravi"]) //arr concat --> ["apple", "mango", "banana", "ravi"]
// console.log(...arr,"ravi") //arr string --> apple mango banana ravi
// console.log(..."ravi") //r a v i
// console.log([..."ravi"])
// console.log([...arr,no].flat)

//spread operator --> it is used to extend the array or object.


// let x = {
//     id : 1,
//     name : "vishwanath"

// }
// console.log({...x, address : "bangalore"})


//Operators
//Arithmetic operators

let a = 100
let b = 200
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log(a == b)
console.log("-------------------")


let z = 100
let y = "100"
console.log(z + y)
console.log(z - y)
console.log(z * y)
console.log(z / y)
console.log(z % y)
console.log(z ** y)
console.log(z == y)
console.log("--------------------")


let c = "ravi"
let d = "100"
console.log(c + d ) //ravi100
console.log(c - d) //NaN is an Not a Number
console.log(c * d) // NaN 
console.log(c / d) //NaN
console.log(c % d) // NaN
console.log(c ** d) // NaN
console.log("---------------")


let e = true
let f = true
console.log(e + b)
console.log(e - b)
console.log(e * b)
console.log(e / f)
console.log(e % f)
console.log(e ** f)
console.log("----------------")


let g = null
let h = null
console.log(g + h)
console.log(g - h)
console.log(g * h)
console.log(g / h)
console.log(g % h)
console.log(g ** h)
