let board = document.querySelector(".white-board")
board.addEventListener("mousemove",(e)=>{
    dot = document.createElement("div");
    // dot.className = "p1";
    dot.classList.add("p1");
    dot.style.top= e.clientY + "px";
    // console.log(e.clientY);
    dot.style.left= e.clientX + "px";
    // console.log(e.clientX);
    board.append(dot)
})


