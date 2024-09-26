// API AND JSON

const MyjsonServare = '{"name":"meshari",  "age":23} ';
console.log(MyjsonServare);
console.log(typeof MyjsonServare);
//Transfer from string to JSON
const JsinObject = JSON.parse(MyjsonServare);
console.log(JsinObject);
