const solution = (number) => {
  if (number <= 0) return 0;
  let nums = [];
  for (let i = 1; i <= number; i++) {
    if ((number - i) % 5 === 0) {
      nums.push(number - i);
    } else if ((number - i) % 3 === 0) {
      nums.push(number - i);
    }
  }
  return nums.reduce((a, b) => a + b, 0);
};

console.log(solution(10));
