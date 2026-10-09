//Comparison Operators
// let a = 10
// let b = 20
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a == b)

// let a = "vishu"
// let b = 200
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a == b)

// let a = 100
// let b = 100
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a == b)

// let a = 0
// let b = false
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a == b)

// let a = Boolean(0)
// let b = false
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a == b)

//Logical Operators(&&, ||, !, ?, )

//Functions --> performing is known as functions
//Advantages of the functions
// -->Reduces the lines of the code
// --> Executes block of code
// --> program reusability(efficiency)
// --/> Easy to read, understand,( Readability)
// --> Make the content into block scope(private)
// -->


function wedding(){
    
}

// wedding --> function name
// () --> parameter
// {} --> scope of the function
// wedding() --> calling function Name or triggering function

function wedding(){
    console.log("ravishastry weds mrunal thakur")
}
wedding()
wedding()
wedding()
wedding()
wedding()
wedding()
wedding()
wedding()

//write a function to greet the function 
let name = "vishwanath"
function greet(name){
    console.log("Hello,",name)
}
greet()


//write the programm to bio data, cgpa, contact no, gender
// 
function person(name, college, cgpa, gender, phno, skills, loc, district, village){
    console.log("Name: ", name)
    console.log("College: ", college)
    console.log("Cgpa: ", cgpa)
    console.log("Gender: ", gender)
    console.log("Phno: ", phno)
    console.log("Skills: ", skills)
    console.log("Location: ", loc)
    console.log("District: ". district)
    console.log("Village: ", village)

}

person(
    "Vishwanath",
    "SDMCET",

)


function add(a = 1, b = 3){
    let c = a + b
    console.log(c)
}

add()
add(a = 10, b = 20)
add(a = 100, b = 200)
add(a = 1000, b = 2000)


function detail(){
    console.log("hello i am vishwanath")
    console.log("i am studying at DCL")
    console.log("gender: male")
    console.log("education: BE")
    console.log("address: bangalore")
    console.log("contact: 47599490330")

}

detail()


