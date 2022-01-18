let a = "apple"
let aaa = "Find me"
let b = function () {
    return "hey"+ " " +this.color
}
let c = () => {
    return "Hi" + " " + this.rrr
        } 
let obj = {
    color : "red",
    size : "small",
    rrr: "pink",
    a , 
    b ,
    we : {c},
    xc : {
        ccc : () => {
            return this
        },
        ttt : function () {
            return this
        },
    },
    www: function () {
        let va=() => {
            return this
        } 
        return va()
    }
}
// console.log(obj)
// console.log(obj.b())
// console.log(b())
// console.log(c())
// console.log(obj.we.c())
// console.log(obj.xc.ccc())
// console.log(obj.xc.ttt())
console.log(obj.www())