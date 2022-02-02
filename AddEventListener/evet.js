const button = document.querySelector("button");

// e
// evt
// event
button.addEventListener("click", function (e) {
  console.log(e);
});
const input = document.querySelector("input");

// input.addEventListener("keyup", (e) => {
//   console.log(e);
//     console.log(e.key);
//     console.log(e.code);
//   console.log(e.target.value);
// });

// input.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       return console.log("Up!");
//     case "ArrowDown":
//       return console.log("Down");
//     case "ArrowLeft":
//       return console.log("left!");
//     case "ArrowRight":
//       return console.log("right!");
//     case "ShiftLeft":
//       return console.log("the left shift");
//     default:
//       console.log("ignored");
//   }
// });


let divTop = 50;
let divLeft = 50;

const div = document.querySelector("div");
// console.log(div.getClientRects());
// window.addEventListener("keydown", (e) => {
//   console.log(e)
  // switch (e.code) {
  //   case "ArrowUp":
  //     console.log((div.style.top = `${divTop--}px`));
  //     break;
  //   case "ArrowDown":
  //     console.log((div.style.top = `${divTop++}px`));
  //     break;
  //   case "ArrowRight":
  //     console.log((div.style.left = `${divLeft++}px`));
  //     break;
  //   case "ArrowLeft":
  //     console.log((div.style.left = `${divLeft--}px`));
  //     break;
  //   case "ControlLeft":
  //     div.classList.toggle("circle");
  //     break;
  //   default:
  //     console.log("IGNORED");
  // }
// });

window.addEventListener("mousemove", (e) => {
  div.style.top = `${e.clientY}px`;
  console.log(e.clientY);
  div.style.left = `${e.clientX}px`;
  console.log(e.clientX);
});