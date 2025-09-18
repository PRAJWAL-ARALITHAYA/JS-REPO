document.body.style.backgroundColor = "black";
document.body.style.color = "white";
const container = document.querySelector(".container");
Object.assign(container.style, {
  height: "20px",
  width: "100px",
  margin: "5px",
  border: "2px solid black",
  borderRadius: "20px",
  //   display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "orange",
  color: "black",
});
Object.assign(document.body.style, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0",
});
let time = document.getElementById("time");
setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
