const unusedDigits = (...arr) => {
  let nums = "0123456789".split("");
  arr.map((x) => {
    x.toString()
      .split("")
      .map((y) => {
        nums = nums.filter((z) => z !== y);
      });
  });

  return nums.join("");
};

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));
