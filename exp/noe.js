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
// console.log(matrix);


//How to upperCase first letter of string 
// let aaa="ali"
// aaa.charAt(0)="A"
// console.log(aaa);
// function titleCase(str) {
//   return str.split(" ").map(x=>x.replace(x[0],x[0].toUpperCase()))
//  }
//  console.log(titleCase("I'm a little tea pot"))


// function mutation(arr) {
//   if(arr[0].includes(arr[1])){
//     return true
//   }  
//   return false
//  }
 
//  console.log(mutation(["hello", "hey"]))
//  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))



function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function () {
  console.log("woof!")
}

// Only change code above this line

let beagle = new Dog();
console.log("hi")
console.log(beagle.bark())