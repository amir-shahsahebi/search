// let a = "apple \n"
let a = "apple \n"
console.log(a)
let b = ["a","b","c"]
let c = ""
b.map(x=> c=c +"\n"+ x)
b.map(x=> c.concat(x))
console.log(c.trim())