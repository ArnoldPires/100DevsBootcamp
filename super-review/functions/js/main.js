
//An example of a function parameter:
function showMessage(from, text) {
    from = '*' + from + '*';
    alert(from + ': ' + text)
}
let from = "Arnold";
showMessage(from, "Hello");
alert(from);
//Another function parameter:
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission to be here?')
    }
}
let age = prompt('How old are you?')
if (checkAge(age)) {
    alert('Access is permitted')
} else {
    alert('Access is not permitted')
}
//TASKS
//Task One: 
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result:
function checkAgeTaskOne(howOld) {
  if (howOld > 18) {
    return true;
  } else {
    // ...
    return confirm("Did your parents allow you?");
  }
}
checkAgeTaskOne(13)
function checkAgeTaskOne2(howOld2) {
  if (howOld2 > 18) {
    return true;
  }
  // ...
  return confirm("Did your parents allow you?");
}
checkAgeTaskOne2(13)

//Task One Answer: There is no difference
//Task Two:
//Rewrite the function using '?' or '||'
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result.
function checkAgeTaskTwo(howOldTask2) {
    if (howOldTask2 > 18) {
        return true;
    } else {
        return confirm('Did your parents allow you?')
    }
}
// Using a question mark operator '?'
function checkAgeQuestionMark(ageQuestionMark) {
    return (ageQuestionMark > 18) ? true : confirm('Did your parents allow you?');
}
//And 
function checkAgeOR(ageOR) {
    return (ageOR > 18) || confirm('Did your parents allow you?');
}