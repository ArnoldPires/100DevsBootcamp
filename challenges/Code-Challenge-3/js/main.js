document.querySelector('#doTheMath').addEventListener('click', giveAnswer)

function giveAnswer(e) {
	e.preventDefault()
	const numberOne = document.querySelector('#multiplyOne').value
	const numberTwo = document.querySelector('#multiplyTwo').value
	const numberThree = document.querySelector('#minus').value
	const answer = document.querySelector('#answer')
	const total = numberOne * numberTwo - numberThree
    answer.innerText = total
    console.log(total)
}

function clear() {
    document.querySelector('#reset').innerText = ''
}