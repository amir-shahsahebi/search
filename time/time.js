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