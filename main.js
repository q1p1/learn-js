//challenge
let intervalId;

document.getElementById("start").onclick = function () {
  let h = document.getElementById("hour");
  let m = document.getElementById("minute");
  let s = document.getElementById("second");

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    let second = parseInt(s.innerHTML);
    let minute = parseInt(m.innerHTML);
    let hour = parseInt(h.innerHTML);

    if (second === 59) {
      s.innerHTML = 0;
      if (minute === 59) {
        m.innerHTML = 0;
        h.innerHTML = hour + 1;
      } else {
        m.innerHTML = minute + 1;
      }
    } else {
      s.innerHTML = second + 1;
    }
  }, 1);
};

document.getElementById("stop").onclick = function () {
  clearInterval(intervalId);
};

document.getElementById("clear").onclick = function () {
  let m = document.getElementById("minute");
  let s = document.getElementById("second");
  let h = document.getElementById("hour");
  m.innerHTML = "0";
  s.innerHTML = "0";
  h.innerHTML = "0";
  clearInterval(intervalId);
};
