const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", (e) => {
  // e.stopPropagation();
  e.stopImmediatePropagation();
  let color = makeRandColor();
  container.style.backgroundColor = color;
  console.log(color);

  console.log("1");
});

button.addEventListener("click", (e) => {
  let color = makeRandColor();
  container.style.backgroundColor = color;
  console.log(color);
  console.log("2");
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});
