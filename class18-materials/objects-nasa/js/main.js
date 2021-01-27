//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", getPhoto);
function getPhoto() {
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=Kcix0jCJzxdeqZQFlf8Xa3rvt6HlYgwxUzZUb5lU"
)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("h2").innerText = data.title;
    document.querySelector("img").src = data.url;
    document.querySelector("h3").innerText = data.explanation;
  });

}