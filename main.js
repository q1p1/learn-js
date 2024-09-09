// document.getElementById("red").onclick = function () {
//   window.localStorage.setItem("color", "red");
//   document.body.style.background = "red";
// };

// document.getElementById("green").onclick = function () {
//   window.localStorage.setItem("color", "green");
//   document.body.style.background = "green";
//   window.localStorage.getItem("color");
// };

// document.getElementById("clear").onclick = function () {
//   document.body.style.background = "";
//   console.log("cleared");
// };

document.getElementById("red").onclick = function () {
  window.localStorage.setItem("color", "red");
  document.body.style.background = window.localStorage.getItem("color");
};
document.getElementById("green").onclick = function () {
  window.localStorage.setItem("color", "green");
  document.body.style.background = window.localStorage.getItem("color");
};
document.getElementById("clear").onclick = function () {
window.localStorage.setItem("color" ,"");
document.body.style.background = window.localStorage.getItem("color");
};

