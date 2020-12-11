const dbz = document.querySelectorAll(".dbzc");

for (element of dbz) {
  element.addEventListener("click", godCheck);
}

function godCheck(click) {
  if (click.target.classList.contains("notGod")) {
   alert("Wrong!");
  } else {
	  alert("Right!");
  }
}