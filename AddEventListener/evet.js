const button = document.querySelector("button");

// e
// evt
// event
button.addEventListener("click", function (e) {
  console.log(e);
});
const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  console.log(e);
    console.log(e.key);
    console.log(e.code);
  console.log(e.target.value);
});