//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

// let age = prompt('How old are you?')
// if (age < 16) {
//     alert('You are not old enough to drive')
// } else if (age < 18 ) {
//     alert("You can hate from outside of the club, because you ain't getting in.")
// } else if (age < 21) {
//     alert("You're not old enough to drink")
// } else if (age < 25) {
//     alert("You can't rent cars affordably")
// } else if (age < 30) {
//     alert("You're unable to rent fancy cars affordably")
// } else if (age > 30) {
//     alert("You're old enough now. Theres nothing else to look forward too.")
// }

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector("h1").addEventListener("click", enterAge)
function enterAge() {
    let age = Number(document.querySelector('input').value)
    if (age <= 16) {
      alert("You are not old enough to drive");
    } else if (age < 18) {
      alert(
        "You can hate from outside of the club, because you ain't getting in."
      );
    } else if (age < 21) {
      alert("You're not old enough to drink");
    } else if (age < 25) {
      alert("You can't rent cars affordably");
    } else if (age <= 30) {
      alert("You're unable to rent fancy cars affordably");
    } else if (age > 30) {
      alert("You're old enough now. Theres nothing else to look forward too.");
    }
    alert(age)
}