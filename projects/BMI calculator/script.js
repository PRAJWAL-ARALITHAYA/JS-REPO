document.body.style.backgroundColor = "#121212";
document.body.style.color = "white";

const container = document.querySelector(".container");
container.style.margin = "10px";
container.style.padding = "10px";
container.style.border = "2px solid white";
container.style.textAlign = "center";
container.style.backgroundColor = "#1E1E1E";
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");
  if (isNaN(height) || height < 0 || isNaN(weight) || weight < 0) {
    results.innerHTML = "Please Enter non empty height and weight";
    console.log("Please Enter non empty height and weight");
  } else {
    results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
    if (results.value < 18.6) message.innerHTML = "You are Under Weight";
    else if (results.value > 24.9) message.innerHTML = "You are Over Weight";
    else message.innerHTML = "You have Normal Weight";
  }
});
// <!console.log(document.querySelector("#results"));>
