//Array Methods

let fruits = ["apple", "mango", "banana", "grapes","apple", "pineapple"]


console.log(fruits)
console.log(typeof(fruits))





console.log(fruits.indexOf("ravi")) // output:- -1
//concate is the only method which will not return new array. 

console.log(fruits.indexOf("apple"))
console.log(fruits.lastIndexOf("apple")) //it provides the index value occuring at the inside at the array. it returns the -1 if the element is not present.

// let ravi = "Ravishastry"
// console.log(typeof(ravi))
// console.log(ravi.split(""))

//Join() :- Adds all the elements of an array inot a string, seperated by the sep
console.log(fruits.join("/"))

//pop() :- it removes the last element form the array and returns the new array i.e updated array
// if the array is empty, pop() method returns undefined
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)


//push():- it is used to append a new element or add the new element at the end of the array.


//tostring()
// console.log(fruits.toString().split(".").join("/"))
// console.log(fruits.toString().split(".").join(""))

// console.log(fruits.shift())
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)

console.log(fruits.splice(2,1))
console.log(fruits)
console.log(fruits.splice(2))

//splice is the method which is used to remove the element from any part of the array and add the element at any part of the array.
console.log(fruits.splice(2,0,"Ravi", "mrunal"))








