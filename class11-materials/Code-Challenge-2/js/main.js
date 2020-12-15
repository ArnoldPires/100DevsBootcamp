//Create two buttons that can turn all letters on the page to lower case and upper case
//Create a button that resets all the text back to its previous state


function lowerCase() {
  document.getElementsByClassName("case")[0].style.textTransform = "lowercase";
  document.getElementsByClassName("case")[1].style.textTransform = "lowercase";
}

function upperCase() {
  document.getElementsByClassName("case")[0].style.textTransform = "uppercase";
  document.getElementsByClassName("case")[1].style.textTransform = "uppercase";
}

function reset() {
  document.getElementsByClassName("case")[0].style.textTransform = "none";
  document.getElementsByClassName("case")[1].style.textTransform = "none";
}  