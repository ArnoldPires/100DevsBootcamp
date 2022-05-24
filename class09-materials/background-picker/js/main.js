document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('black').onclick = partyBlack
document.getElementById('red').onclick = partyRed
document.getElementById('berserk').onclick = partyBerserk
document.getElementById('white').onclick = partyWhite

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'white'
}
function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'white'
}
function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'white'
}
function partyBlack() {
  document.querySelector('body').style.backgroundColor = 'rgb(3, 0, 0)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'white'
}
function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 34)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'white'
}
function partyBerserk() {
  document.querySelector('body').style.backgroundImage = "url('https://media.comicbook.com/2020/07/berserk-manga-guts-berserker-armor-1230243.jpeg?auto=webp&width=1204&height=628&crop=1204:628,smart')";
  document.querySelector('body').style.color = 'white'
}
function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'rgb(255,255,255)'
  document.querySelector('body').style.backgroundImage = 'none'
  document.querySelector('body').style.color = 'black'
}
