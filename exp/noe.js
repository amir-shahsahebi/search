function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let j = 0; j < n; j++) {
    row.push(0);
  }
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    newArray.push(row);

  }
    // Pushes the current row, which now has n zeroes in it, to the array
  
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
