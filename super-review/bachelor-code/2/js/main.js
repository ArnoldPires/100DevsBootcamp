const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add("show")
	sharleen.classList.add("show");
	andi.classList.toggle("hidden")
}

function claireNext(){
	andi.classList.add("show");
	sharleen.classList.add("show");
	claire.classList.toggle("hidden")
}

function sharleenNext(){
	andi.classList.add("show");
	claire.classList.add("show");
	sharleen.classList.toggle("hidden")
}
