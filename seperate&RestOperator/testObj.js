let a = "apple"
let b = function () {
    return "hey"+ " " +this.color
}
let obj = {
    color : "red",
    size : "small",
    a, 
    b
}
console.log(obj)
console.log(obj.b())
console.log(b())