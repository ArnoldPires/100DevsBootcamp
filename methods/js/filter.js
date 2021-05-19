document.querySelector("#exampleOne").addEventListener("click", giveAnswerOne);
function canVote(age) {
  return age >= 18;
}
function giveAnswerOne() {
  let filtered = [15, 24, 56, 17, 19, 44, 36].filter(canVote);
  document.querySelector("#answerOne").innerHTML = filtered;
}
