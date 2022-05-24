document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  //Conditionals go here
  if (day === "tuesday" || day === "tues") {
    document.getElementById("placeToSee").innerText = "First day of class!"
  } else if (day === 'thursday' || day === 'thurs') {
    document.getElementById("placeToSee").innerText = "Second day of class!"
  } else if (day === 'sunday' || day === 'sun') {
    document.getElementById("placeToSee").innerText = "Office Hours!"
  } else {
    document.getElementById("placeToSee").innerText = "Boring Day!"
  }
}