// ...
// console.log(null===false)
let obj = {
  name: "PC",
  age: 58,
  color: "black",
  "price value": "$100",
  // count :function  () {
  //     let count=0
  //      x.map(y=>count= y + count)
  //     return count
  // },
  hdd: 2,
  count2: function (x) {
    let count = 0;
    x.map((y) => (count = y + count));
    count = count + this.hdd;
    return count;
  },
  count3: (x) => {
    return hdd;
  },
  count4: function () {
    return this.hdd;
  },
  count5: 
  function () {
        let s = () => {
            return this.hdd;
        } 
        return s()
  },
  count6: 
  function () {
       let a= () => {
            return this.hdd
        }
       return  a()
  }
};
// let hdd = 4;
let arr = [1,2,3,4,5,6,7,8,9]
// console.log(obj.count2(arr))
// console.log(obj.count3(1))
// console.log(obj.count4())
// console.log(obj.count5())
console.log(obj.count6())
let obj2 = {
    "name" : "PC",
    age : 58,
    "color" : "black",
    price : "$100",
}
// console.log(obj)
// console.log(arr)
// console.log(...arr)
let { name, age, color, ...a } = obj2;
console.log(name)
// let {name , age , color , price} = obj2
// console.log(name)