// Human readable working hours

// Your task in order to complete this Kata is to write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

// The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

// The output format for one day should be SUN: 11:00 - 23:00.

// If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: MON - WED: 11:00 - 23:00.

let readableTimetable = (workdays) => {
    if (workdays.length===0) return []
    else{
    let arr = []
    workdays.map(x=>arr.push([x["day"].toUpperCase() , x["from"]+' - '+x["to"]]))
    let days = {
        "MON" : 0,
        "TUE" : 1,
        "WED" : 2,
        "THU" : 3, 
        "FRI" : 4,
        "SAT" : 5,
        "SUN" : 6,
    }   
    let arr0=[]
    
    for (key in days){
        for (let i = 0 ; i <arr.length ;i++) {
            if (key === arr[i][0]) arr0[days[key]]=arr[i]
        }
    }
    arr=arr0.filter(x=>x)
    let x = arr[0]
    console.log(arr)
    // console.log(arr0)
        for (let i = 1 ; i <arr.length ;i++) {
            // if (x[1]===arr[i][1] && days[arr[i][0]] - days[arr[i-1][0]] <=2) {
            if (x[1]===arr[i][1] ) {
                arr[i][0] = x[0]+ " - " + arr[i][0] 
                arr[i-1] = null
                // arr=arr.filter(x=>x)
            }
            x= arr[i]
        }
        // for (let i = 1 ; i <arr.length ;i++) {
        //     if (x[1]===arr[i][1] ) {
        //         arr[i][0] = x[0]+ " - " + arr[i][0] 
        //         arr[i-1] = null
        //     }
        //     x= arr[i]
        // }
    // let arr2 =arr.filter(x=>x).map(x=>x[0].length>9 ? [x[0].slice(0,3)+x[0].slice(9),x[1]]: x).map(x=>x[0]+": "+x[1])
    let arr2 =arr.filter(x=>x).map(x=>x[0].length>9 ? [x[0].slice(0,3)+x[0].slice(9),x[1]]: x).map(x=>x[0]+": "+x[1])
    let arr3 =""
     arr2.map(x=>arr3=arr3+"\n"+x)
    return arr3.trim()
}};

const test2 = [
    { day: "mon", from: "11:00", to: "23:00" },
    { day: "tue", from: "11:00", to: "23:00" },
    { day: "thu", from: "11:00", to: "23:00" },
    { day: "sat", from: "11:00", to: "23:00" },
    { day: "sun", from: "11:00", to: "23:00" },
]
// console.log(readableTimetable(test2));
// console.log(`MON - TUE: 11:00 - 23:00
// THU: 11:00 - 23:00
// SAT - SUN: 11:00 - 23:00`)
  const data = [
    {
        "day": "sat",
        "from": "10:00",
        "to": "23:00"
    },
    {
        "day": "mon",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "tue",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "wed",
        "from": "11:00",
        "to": "23:00"
    },
    {
        "day": "thu",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "fri",
        "from": "12:00",
        "to": "23:00"
    },
    {
        "day": "sun",
        "from": "11:00",
        "to": "23:00"
    }
]
console.log(readableTimetable(data))
// MON - WED: 11:00 - 23:00
// THU - FRI: 12:00 - 23:00
// SAT: 10:00 - 23:00
// SUN: 11:00 - 23:00
// console.log(readableTimetable([]))
const test0 = [
  { day: "mon", from: "11:00", to: "23:00" },
  { day: "tue", from: "11:00", to: "22:00" },
  { day: "wed", from: "11:00", to: "23:00" },
  { day: "thu", from: "12:00", to: "22:00" },
  { day: "fri", from: "12:00", to: "23:00" },
  { day: "sat", from: "10:00", to: "22:00" },
  { day: "sun", from: "11:00", to: "23:00" },
]
// console.log(readableTimetable(test0))

// Out put
// MON - WED: 11:00 - 23:00
// THU - FRI: 12:00 - 23:00
// SAT: 10:00 - 23:00
// SUN: 11:00 - 23:00
// let x = `MON: 11:00 - 23:00
// TUE: 11:00 - 22:00
// WED: 11:00 - 23:00
// THU: 12:00 - 22:00
// FRI: 12:00 - 23:00
// SAT: 10:00 - 22:00
// SUN: 11:00 - 23:00`
// console.log(x)