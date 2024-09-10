/*
control flow 
if 
if else 
else 
*/
let prise = 100;
let discount = true;
let offer = 10;
let country = "KSA";
if (discount === false && country === "KSA") {
  prise -= offer;
} else {
  console.log("no offer");
}
console.log(prise);
