let time = new Date()
console.log(time)
console.dir(time)
console.log(time.getDate())
console.log(time.toTimeString())
console.log(time.toDateString())
console.log(time.toString())

console.log(time.toLocaleString())
console.log(time.getTime())

//use get time to calculate differences days baetweeen old time and now 
const before =new Date ('February 1 2020 8:50:10')
console.log(before.getTime())
diff = time.getTime() - before.getTime()
console.log(diff)
let minutes = Math.round(diff/1000/60)
let hours = Math.round(minutes/60)
let days = Math.round(hours/24)
let years = (days/365).toFixed(2)
console.log(years , days , hours , minutes)

// how to show timestamp
console.log(new Date(1616565472556))