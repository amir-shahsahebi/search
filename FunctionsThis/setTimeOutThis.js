// let tm= setTimeout(() => {
//     console.log("Hello")
//     console.log(this)
// }, 1000);
let obj = {
    text: "Amir",
    tm2 : function (){
        setTimeout(() => {
        console.log(this)
        console.log("hello Im in Obj in arrow func form")
    }, 1000)
    },

    tm3 : function () {
        setTimeout(function () {
        console.log(this)
        console.log("a hello Im in Obj in function declaration form")
    }, 1000)
    },
    

}
obj.tm2()
obj.tm3()
/* note:
when use set time oun with function declaration inner it, its refer to window but when use arrow function in it, it refer to parents of its parent
*/