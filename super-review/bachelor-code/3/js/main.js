document.querySelector('.contestant').addEventListener("click", wrongPick);

function wrongPick() {
	alert('Wrong!')
}

document.querySelector('.rose').addEventListener('click', rightPick)
function rightPick() {
	alert('Right!')
	document.querySelector("#nikki").style.display = "block";
}