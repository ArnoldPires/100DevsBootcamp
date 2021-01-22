//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takeArray(n1,n2,n3,n4,n5) {
    alert((n1*n2*n3*n4*n5))
}
takeArray(1,2,3,4,5)

//OR
function multiplyArray(array) {
    let product = 1
    array.forEach((item, i) => {
        product *= item
    })
    console.log(product)
}
multiplyArray([1,2,3,4,5])

//OR
function multiarray(arr) {
    let productTwo = 1
    for(let index = 0;index < arr.length; index++) {
        productTwo = productTwo * arr[index]
    }
    console.log(productTwo);
}
multiarray([1,2,3,4,5])