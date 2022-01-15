// Human Readable Time
// link:
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

let humanReadable = x => {
   let s=  (x/60 - Math.floor(x/60))*60
   let m = Math.floor(x/60)
//    let h = 
   return m + " " + s
}
console.log(humanReadable(5000))