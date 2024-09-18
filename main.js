// MAP And Object
let MyObject = {
  10: "number",
  10: "string",
};
console.log(MyObject[10]);
console.log(MyObject["10"]);

let MyMap = new Map();
MyMap.set("10", "String");
MyMap.set(10, "Number");
console.log(MyMap.get(10));
console.log(MyMap.get("10"));
console.log("##########");
console.log(MyMap);
console.log(MyObject);
