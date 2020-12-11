document.querySelector('#strong').addEventListener('click', hide)
function hide() {
  document.querySelectorAll(".db").forEach(el => el.style.display = 'none');
}