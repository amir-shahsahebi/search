function dontGiveMeFive(start, end) {
  let numbs = [];
  for (let i = 0; i <= end - start; i++) {
    if ((i + start) % 5 !== 0) numbs = [...numbs, i + start];
    if ((i + start) % 10 === 0) numbs = [...numbs, i + start];
  }
  return numbs.length;
}

// const dontGiveMeFive1 = (start, end) =>
//   end - start - Math.floor((end - start) / 10);

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
