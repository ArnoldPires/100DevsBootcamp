//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function winterArray(arr) {
    let winArr = []
    arr.forEach((item, i) => {
        if(item % 2 === 0) {
            winArr.push(item)
        }
    });
    return winArr
}
console.log(winterArray([1,2,3,4,5]))