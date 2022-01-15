// Human readable working hours

// Your task in order to complete this Kata is to write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

// The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

// The output format for one day should be SUN: 11:00 - 23:00.

// If two or more days of the week in a row have the same working hours they should be concatenated and have the following format: MON - WED: 11:00 - 23:00.

let readableTimetable = (workdays) => {
    let arr = []
    workdays.map(x=> 
        // arr.push(`${x["day"]}: ${x["from"]} - ${x["to"]}`)
        // arr.push([x["day"],x["from"]+' '+x["to"]])
        arr.push([x["day"].toUpperCase() , x["from"]+' '+x["to"]])
        )
        let x = arr[0]
        for (let i = 1 ; i <arr.length ;i++) {
            if (x[1]===arr[i][1]) {
                arr[i][0] = x[0]+ " - " + arr[i][0] 
                arr[i-1] = null
            }
            x= arr[i]
        }
        // arr.filter(x=>x).map(x=>x[0].length>10 ? x[0].slice(3,8): x)
        // arr
    return arr.filter(x=>x).map(x=>x[0].length>9 ? [x[0].slice(0,3)+x[0].slice(9),x[1]]: x)
  };

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
// Out put
// MON - WED: 11:00 - 23:00
// THU - FRI: 12:00 - 23:00
// SAT: 10:00 - 23:00
// SUN: 11:00 - 23:00