arr = []
arr[0]=1
arr[4]=2
console.log(arr)
let arr2=arr.map((x,y)=> x?x:y )
console.log(arr2)
for (let i= 0 ; i<arr.length ; i++) {
    if (!arr[i]) arr[i] = 555
}
console.log(arr)