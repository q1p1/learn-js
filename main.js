//Spread Syntax
console.log([..."meshari"]);
let ftindes = ["Meshari", "salem", "Ahmed"];
let newFrindes = ["khaild", "areej"];
console.log([...ftindes, ...newFrindes]);

let numbers = [1, 2, 3, 4, 5];
console.log(Math.min(...numbers));
let obj1 = {
  a: 40,
};
let obj2 = {
  b: 25,
};
console.log({ ...obj1, ...obj2 });
