let board = document.querySelector(".white-board")
board.addEventListener("mousemove",(e)=>{
    // console.log("hey")
    dot = document.createElement("div");
    dot.classList.add("p1");
    dot.style.top= e.clientY + "px";
    console.log(e.clientY);
    dot.style.left= e.clientX + "px";
    console.log(e.clientX);
})