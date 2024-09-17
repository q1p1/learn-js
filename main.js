//Destructuring Mixed Content
let data = [1, 1, 1, 12, 2, 3, 4];
let uniqueData = new Set([1, 1, 1, 12, 2, 3, 4]);
console.log(data);
uniqueData.delete(12);
uniqueData.delete(3);
console.log(uniqueData);
console.log(uniqueData.size);
