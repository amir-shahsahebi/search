const moveZeros = (arr) => {
  let arr1 = arr.filter((el) => el === 0);
  let arr2 = arr.filter((el) => el !== 0);
  return [...arr2, ...arr1];
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
