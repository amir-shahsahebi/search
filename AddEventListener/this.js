const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
  
    return `rgb(${r} , ${g} , ${b})`;
  };
  
const colorize3 = function () {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
  };
  
  for (let button of buttons) {
    button.addEventListener("click", colorize);
  }
  
  for (let h1 of h1s) {
    h1.addEventListener("click", colorize);
  }