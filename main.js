// Set Interval

// setInterval(function () {
//   console.log("Hello, World!"); // Print 'Hello, World!' every second
// }, 1000);

let coun = document.getElementById("down");
function countdown() {
  coun.innerHTML -= 1;
  if (coun.innerHTML === "0") {
    clearInterval(clear);
    console.log("Time's up!");
  }
}
let clear = setInterval(countdown, 500);
