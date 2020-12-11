const piccolo = document.querySelector("#piccolo");
const goku = document.querySelector("#goku");
const vegeta = document.querySelector("#vegeta");

document.querySelector("#piccoloNext").addEventListener("click", piccoloNext);
document.querySelector("#gokuNext").addEventListener("click", gokuNext);
document.querySelector("#vegetaNext").addEventListener("click", vegetaNext);

function piccoloNext() {
  piccolo.classList.add("hidden");
  goku.classList.add("hidden");
  vegeta.classList.toggle("hidden");
}

function gokuNext() {
  goku.classList.add("hidden");
  vegeta.classList.add("hidden");
  piccolo.classList.toggle("hidden");
}

function vegetaNext() {
  vegeta.classList.add("hidden");
  piccolo.classList.add("hidden");
  goku.classList.toggle("hidden");
}
