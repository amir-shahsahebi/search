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
   let s=0;
   let h=0;
   let m=0;
   if (x<=3599) {
       m = Math.floor(x/60)
       s =  Math.floor((x/60 - Math.floor(x/60))*60)
   } else if (x>3599 && x <=359999){
       h = Math.floor(x/3600)
       m = Math.floor((x-h*3600) /60)
       s= x- h*3600 - m*60
    } 
    if (s===0) s="00"
    if (s>0 && s<10) s=`0${s}`
    if (m===0) m="00"
    if (m>0 && m<10) m=`0${m}`
    if (h===0) h="00"
    if (h>0 && h<10) h=`0${h}`

   return h + ":" + m + ":" + s
}
console.log(humanReadable(60))