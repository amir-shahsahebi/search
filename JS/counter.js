function dontGiveMeFive(start, end) {
  let numbs = [];
  for (let i = 0; i <= Math.abs(end - start); i++) {
    if (!(i + start).toString().includes("5")) numbs = [...numbs, i + start];
  }
  return numbs.length;
}

console.log(dontGiveMeFive(49, 65));
// console.log(dontGiveMeFive(4, 17));
