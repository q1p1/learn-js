// loop anf if 
let myArraye = ["mhamed", "meshari", "khaild", "alghabbn", "ali", 20];
let nams = [];
let numbers = [];
for (let i = 0; i < myArraye.length; i++) {
  if (typeof myArraye[i] === "string") {
    nams.push(myArraye[i]);
  }
  if (typeof myArraye[i] === "number") {
    numbers.push(myArraye[i]);
  }
}

console.log(nams);
console.log(numbers);
