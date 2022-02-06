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
        eraser=false
        
        btnEraser.style.backgroundColor = "white";
        btnEraser.style.color = "black";
    }
    // console.dir(color)
})
makeColor()
//define pen
let penSize = "5px";
pen1 = document.querySelector(".pen1")
pen2 = document.querySelector(".pen2")
pen3 = document.querySelector(".pen3")
pen1.style.boxShadow = "5px 3px 3px rgba(0, 0, 0, 0.486)";

pen1.addEventListener("click",()=>{
     penSize = "5px"
    pen1.style.boxShadow = "5px 3px 3px rgba(0, 0, 0, 0.486)";
    pen2.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
    pen3.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
})
pen2.addEventListener("click",()=>{
     penSize = "10px"
    pen2.style.boxShadow = "5px 3px 3px rgba(0, 0, 0, 0.486)";
    pen1.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
    pen3.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
})
pen3.addEventListener("click",()=>{
     penSize = "15px"
    pen3.style.boxShadow = "5px 3px 3px rgba(0, 0, 0, 0.486)";
    pen1.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
    pen2.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.486)";
})


let mouseIsDown = false
board.addEventListener('mousedown', function(){
    mouseIsDown = true
})
board.addEventListener('mouseup', function(){
    mouseIsDown = false
})
let eraser = false
board.addEventListener("mousemove",(e)=>{
    if (mouseIsDown && !eraser) {
    dot = document.createElement("div");
    dot.classList.add("p1");
    dot.style.backgroundColor= color;
    dot.style.top= e.clientY + "px";
    dot.style.left= e.clientX + "px";
    dot.style.width = penSize;
    dot.style.height = penSize;
    board.append(dot)
    }
})

let resetColor = document.querySelector(".reset-color")
resetColor.addEventListener("click" ,  ()=> {
    let colors = document.querySelectorAll(".color")
    for (co of colors) {
        co.remove()
    }
    // let btnEraser = document.querySelector(".eraser")
    // console.log(colors)
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
    let btnEraser = document.createElement("button");
    btnEraser.classList.add(".eraser");
    btnEraser.style.position = "absolute";
    btnEraser.style.bottom= "-15px"
    btnEraser.style.left= "7px"
    btnEraser.style.width= "85%"
    btnEraser.style.height= "25px"

    btnEraser.innerText = "Eraser";
    palet.append(btnEraser);
    btnEraser.addEventListener("click",(t)=> {
        eraser = true
            btnEraser.style.backgroundColor = "red";
            btnEraser.style.color = "white";
        // t.stopImmediatePropagation();
        let mouseIsDown = false;
        board.addEventListener("mousedown", function () {
            mouseIsDown = true;
        });
        board.addEventListener("mouseup", function () {
            mouseIsDown = false;
        });
        
        board.addEventListener("mousemove", (e) => {
            if (mouseIsDown) {
                if (e.target.nodeName==="DIV" && e.target.className ==="p1") {
                    e.target.remove()
                }
            }
        });
        
    })
