const solution = (nums) => (nums ? nums.sort((x, y) => x - y) : []);
console.log(solution([1, 2, 10, 50, 5]));
