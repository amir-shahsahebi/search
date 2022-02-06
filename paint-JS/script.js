let board = document.querySelector(".white-board")
color= "black"
if (board.style.backgroundColor==="black") color = "white"

let rgb = () => {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
let n = 16
palet = document.querySelector(".palet")
function makeColor() {
    for (i=1 ; i<n ; i++) {
       let div2 = document.createElement("div")
        div2.classList.add("color")
        div2.style.backgroundColor = rgb()
        palet.append(div2)
    }
}

palet.addEventListener("click", (e)=>{
    
    if (e.target.clientHeight===30) {
        let colors = document.querySelectorAll(".color")
        for (co of colors) {
            co.style.borderRadius = "0px"
        }
        color = e.target.style.backgroundColor
        e.target.style.borderRadius = "50px"
    }
    console.dir(color)
})
makeColor()
// let board = document.querySelector(".white-board")
// board.addEventListener("mousemove",(e)=>{
//     dot = document.createElement("div");
//     dot.classList.add("p1");
//     dot.style.backgroundColor= color;
//     dot.style.top= e.clientY + "px";
//     dot.style.left= e.clientX + "px";
//     board.append(dot)
// })
let mouseIsDown = false
board.addEventListener('mousedown', function(){
    mouseIsDown = true
})
board.addEventListener('mouseup', function(){
    mouseIsDown = false
})

board.addEventListener("mousemove",(e)=>{
    if (mouseIsDown) {
    dot = document.createElement("div");
    dot.classList.add("p1");
    dot.style.backgroundColor= color;
    dot.style.top= e.clientY + "px";
    dot.style.left= e.clientX + "px";
    board.append(dot)
    }
})

let resetColor = document.querySelector(".reset-color")
resetColor.addEventListener("click" ,  ()=> {
    let colors = document.querySelectorAll(".color")
    for (co of colors) {
        co.remove()
    }
    console.log(colors)
    makeColor()
})

let resetBoard = document.querySelector(".reset-board")
resetBoard.addEventListener("click",()=> {
   let colors = document.querySelectorAll(".p1")
    for (co of colors) {
        co.remove()
    }
    board.style.backgroundColor= "white"
}) 


let backgroundBoard = document.querySelector(".background-board")
backgroundBoard.addEventListener("click",()=> {
   board.style.backgroundColor= color
}) 

//eraser 
let btnEraser = document.createElement("button")
btnEraser.classList.add(".reset-board")