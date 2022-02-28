let divClock = document.querySelector(".clock")
let clock = () =>{
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    divClock.innerText = `${h} : ${m} : ${s}`
}
setInterval(clock,1000)