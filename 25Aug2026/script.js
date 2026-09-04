let fruits = ["apples","mango", "banana", "grapes", "pineapple"]
let res = []
let apple = fruits.splice(0,1).toString()
let a = apple.slice(0,1)
let ppl = apple.slice(1,-1).split("").reverse().join("")
.toUpperCase()
let e = apple.slice(-1)
res.push(a.concat(ppl,e))





