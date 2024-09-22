// email 
let Mystreing = "meshari@gmail.com meshari@gmail.org";
let word = /\w+@+\w+\.+(com)/g;
console.log(Mystreing.match(word));
