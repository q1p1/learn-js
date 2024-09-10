// Set Time Out
function sayMsg(name) {
  console.log(`Hello ${name}`);
}
let sto = setTimeout(sayMsg, 3000, "Meshari ");

let btn = (document.getElementById("btn").onclick = function () {
  clearTimeout(sto);
});
