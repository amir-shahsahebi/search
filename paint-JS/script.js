let board = document.querySelector(".white-board")
board.addEventListener("mousemove",(e)=>{
    dot = document.createElement("div");
    // dot.className = "p1";
    dot.classList.add("p1");
    dot.style.top= e.clientY + "px";
    dot.style.left= e.clientX + "px";
    board.append(dot)
})

let rgb = () => {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return rgb(r,g,b)
}
let n = 20
palet = document.querySelector(".palet")
function makeColor() {
    for (i=1 ; i<n ; i++) {
       let div2 = document.createElement("div")
        div2.classList.add("color")
        div2.style.backgroundColor = rgb()
        palet.append(div2)
    }
}
makeColor()

palet.addEventListener("click", (e)=>{
    if (e.target.clientHeight===30) {
        color = e.target.style.backgroundColor
    }
    console.dir(color)
})


