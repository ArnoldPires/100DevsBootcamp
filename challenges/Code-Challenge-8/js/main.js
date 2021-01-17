//Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 
function newArrOnlyOdd(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
newArrOnlyOdd([1,2,3,4,5])
console.log(arr)


function numMultiAndDivi(num) {
  for(let i = 1; i <= num; i++) {
    if( (i * 3) % 2 !== 0) {
      console.log(i)
    }
  }
}
numMultiAndDivi(100)