const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const p = document.createElement("p");

h1.append(p);

// no need to this
// const body = document.querySelector('body')

button.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  p.innerText = newColor;
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r} , ${g} , ${b})`;
};
