// ...
let obj = {
    "name" : "PC",
    "age" : 58,
    "color" : "black",
    "price" : "$100",
}
let obj2 = {
    name : "PC",
    age : 58,
    color : "black",
    price : "$100",
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(obj)
console.log(arr)
console.log(...arr)
let {name , age , color , price} = obj
console.log(name)
// let {"name" , age , color , price} = obj2
// console.log(name)