document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
let numberOne = [1, 3, 5, 7, 9, 11]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function giveAnswerOne() {
    document.querySelector('#answerOne').innerHTML = numberOne.reduce(reducer)
}

document.querySelector("#exampleTwo").addEventListener("click", giveAnswerTwo);
let numberTwo = [200, 300, 400];
function giveAnswerTwo() {
    document.querySelector("#answerTwo").innerHTML = numberTwo.reduce((total, amount) => total + amount) 
}

document.querySelector("#exampleThree").addEventListener("click", giveAnswerThree);
let food = ['apple', 'berry', 'orange', 'peanut', 'mango', 'pear']
function giveAnswerThree() {
    document.querySelector("#answerThree").innerHTML = food.reduce((prev, curr) => prev + ", " + curr)
}