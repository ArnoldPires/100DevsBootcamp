document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
let numberOne = [2, 4, 6, 8, 10];
function giveAnswerOne() {
    document.querySelector("#answerOne").innerHTML = numberOne.map((x) => x * 2);
}

document.querySelector("#exampleTwo").addEventListener('click', giveAnswerTwo);
let numberTwo = [0, 1, 3]
function giveAnswerTwo() {
    document.querySelector("#answerTwo").innerHTML = numberTwo.map(Math.sqrt)
}

document.querySelector("#exampleThree").addEventListener("click", giveAnswerThree);
let numberThree = [3.3453453, 1.889879, 4.67686];
function giveAnswerThree() {
  document.querySelector("#answerThree").innerHTML = numberThree.map(Math.floor);
}