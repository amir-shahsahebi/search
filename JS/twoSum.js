const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && a + numbers[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([1, 2, 3], 4));
