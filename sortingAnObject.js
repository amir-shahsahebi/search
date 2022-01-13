let obj1 = {
  apple: 3,
  carrot: 1,
  corn: 5,
};
let objSorted = (obj) => {
  let arr = Object.values(obj).sort();
  let obj2 = {};
  for (i = 0; i < arr.length; i++) {
    for (key in obj) {
      if (obj[key] === arr[i]) {
        obj2[key] = arr[i];
      }
    }
  }
  return obj2;
};

console.log(objSorted(obj1));
