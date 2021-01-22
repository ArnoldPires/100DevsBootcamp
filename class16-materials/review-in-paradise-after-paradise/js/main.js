// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function paradiseNumbers(para) {
    if(para === 1 ) {
        alert('Hi')
    } else {
        alert("bye")
    }
}
paradiseNumbers(0)
//OR

function paradiseNumbersTwo(paraTwo) {
    if (paraTwo[0] < paraTwo[paraTwo.length - 1]) {
        alert("Hey there")
    } else if (paraTwo[0] > paraTwo[paraTwo.length - 1]) {
        alert("See ya later!")
    } else {
        alert("We close in an hour boiiiii!")
    }
}
paradiseNumbersTwo([1,2,3,4,5])