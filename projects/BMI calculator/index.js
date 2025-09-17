document.body.style.backgroundColor = "grey";
document.body.style.color = "white";

const container = document.querySelector(".container");
container.style.margin = "10px";
container.style.padding = "10px";
container.style.border = "2px solid black";
container.style.textAlign = "center";
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
});
