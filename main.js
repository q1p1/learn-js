//Array.every Method
let locatchane = {
  20: "place1",
  30: "place2",
  40: "place3",
  50: "place4",
};
let Startplace = 15;

let locatchaneArray = Object.keys(locatchane).map(Number);
console.log(locatchaneArray);
let check = locatchaneArray.every(function (Elament) {
  return Elament > this;
}, Startplace);
console.log(check);
